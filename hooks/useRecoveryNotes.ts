import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export interface RecoveryNote {
  id: string;
  user_id: string;
  content: string;
  note_date: string;
  created_at: string;
  updated_at: string;
}

async function fetchNotes(): Promise<RecoveryNote[]> {
  const response = await fetch('/api/recovery-notes');
  if (!response.ok) {
    throw new Error('Failed to fetch notes');
  }
  const data = await response.json();
  return data.notes || [];
}

async function createNote(content: string, noteDate: string): Promise<RecoveryNote> {
  const response = await fetch('/api/recovery-notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content, note_date: noteDate }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Failed to save note');
  }

  const data = await response.json();
  return data.note;
}

async function updateNote(id: string, content: string): Promise<RecoveryNote> {
  const response = await fetch('/api/recovery-notes', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, content }),
  });

  if (!response.ok) {
    throw new Error('Failed to update note');
  }

  const data = await response.json();
  return data.note;
}

async function deleteNote(id: string): Promise<void> {
  const response = await fetch('/api/recovery-notes', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete note');
  }
}

export function useRecoveryNotes() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['recoveryNotes'],
    queryFn: fetchNotes,
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  const createMutation = useMutation({
    mutationFn: ({ content, noteDate }: { content: string; noteDate: string }) =>
      createNote(content, noteDate),
    onMutate: async ({ content, noteDate }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['recoveryNotes'] });

      // Snapshot previous value
      const previousNotes = queryClient.getQueryData<RecoveryNote[]>(['recoveryNotes']);

      // Optimistically add new note
      const optimisticNote: RecoveryNote = {
        id: `temp-${Date.now()}`,
        user_id: '',
        content,
        note_date: noteDate,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      queryClient.setQueryData<RecoveryNote[]>(['recoveryNotes'], (old = []) => [
        optimisticNote,
        ...old,
      ]);

      return { previousNotes };
    },
    onError: (_err, _variables, context) => {
      // Rollback on error
      if (context?.previousNotes) {
        queryClient.setQueryData(['recoveryNotes'], context.previousNotes);
      }
    },
    onSettled: () => {
      // Refetch after mutation
      queryClient.invalidateQueries({ queryKey: ['recoveryNotes'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, content }: { id: string; content: string }) =>
      updateNote(id, content),
    onMutate: async ({ id, content }) => {
      await queryClient.cancelQueries({ queryKey: ['recoveryNotes'] });

      const previousNotes = queryClient.getQueryData<RecoveryNote[]>(['recoveryNotes']);

      queryClient.setQueryData<RecoveryNote[]>(['recoveryNotes'], (old = []) =>
        old.map((note) => (note.id === id ? { ...note, content, updated_at: new Date().toISOString() } : note))
      );

      return { previousNotes };
    },
    onError: (_err, _variables, context) => {
      if (context?.previousNotes) {
        queryClient.setQueryData(['recoveryNotes'], context.previousNotes);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['recoveryNotes'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteNote(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['recoveryNotes'] });

      const previousNotes = queryClient.getQueryData<RecoveryNote[]>(['recoveryNotes']);

      queryClient.setQueryData<RecoveryNote[]>(['recoveryNotes'], (old = []) =>
        old.filter((note) => note.id !== id)
      );

      return { previousNotes };
    },
    onError: (_err, _variables, context) => {
      if (context?.previousNotes) {
        queryClient.setQueryData(['recoveryNotes'], context.previousNotes);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['recoveryNotes'] });
    },
  });

  return {
    notes: query.data || [],
    isLoading: query.isLoading,
    error: query.error,
    createNote: createMutation.mutate,
    updateNote: updateMutation.mutate,
    deleteNote: deleteMutation.mutate,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
}
