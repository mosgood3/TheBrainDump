'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
// Backend removed

interface RecoveryNote {
  id: string;
  user_id: string;
  note_date: string;
  content: string;
  created_at: string;
}

export default function RecoveryNotes() {
  const { user } = useAuth();
  const [notes, setNotes] = useState<RecoveryNote[]>([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteDate, setNewNoteDate] = useState(new Date().toISOString().split('T')[0]);
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAllNotes, setShowAllNotes] = useState(false);

  // Backend removed - no fetch needed

  const handleAddNote = async () => {
    if (!newNoteContent.trim()) {
      setError('Please enter a note');
      return;
    }

    setLoading(true);
    setError('');

    // Backend removed - just add to local state
    const newNote: RecoveryNote = {
      id: Date.now().toString(),
      user_id: user?.id || 'mock-user',
      note_date: newNoteDate,
      content: newNoteContent,
      created_at: new Date().toISOString(),
    };

    setNotes([newNote, ...notes]);
    setNewNoteContent('');
    setNewNoteDate(new Date().toISOString().split('T')[0]);
    setLoading(false);
  };

  const handleUpdateNote = async (id: string) => {
    if (!editContent.trim()) {
      setError('Please enter a note');
      return;
    }

    setLoading(true);
    setError('');

    // Backend removed - just update local state
    setNotes(notes.map(note =>
      note.id === id ? { ...note, content: editContent } : note
    ));
    setEditingNote(null);
    setEditContent('');
    setLoading(false);
  };

  const handleDeleteNote = async (id: string) => {
    if (!confirm('Are you sure you want to delete this note?')) {
      return;
    }

    setLoading(true);
    setError('');

    // Backend removed - just update local state
    setNotes(notes.filter(note => note.id !== id));
    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const displayedNotes = showAllNotes ? notes : notes.slice(0, 5);

  // Check if user already has a note for today
  const todayNote = notes.find(note => note.note_date === new Date().toISOString().split('T')[0]);

  return (
    <div className="space-y-6">
      {/* Add New Note Section */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="font-bold text-blue-900 mb-4 text-lg">Today's Recovery Win</h3>
        <p className="text-sm text-blue-800 mb-4">
          {todayNote
            ? "You've already added a note for today! You can view and edit it below."
            : "What went well today? Any progress, insights, or moments of strength?"}
        </p>

        {!todayNote && (
          <>
            <div className="flex gap-3 mb-3">
              <input
                type="date"
                value={newNoteDate}
                onChange={(e) => setNewNoteDate(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                className="px-4 py-2 border border-blue-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
              className="w-full p-4 border border-blue-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={8}
              maxLength={750}
              placeholder="Example: 'I went to the grocery store even though I felt anxious. I stayed for 15 minutes and practiced deep breathing. Small win!'"
              disabled={loading}
            />
            <div className="text-right text-xs text-gray-500 mt-1">
              {newNoteContent.length}/750 characters
            </div>
            <button
              onClick={handleAddNote}
              disabled={loading || !newNoteContent.trim()}
              className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Saving...' : 'Save Note'}
            </button>
          </>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Past Notes Section */}
      {notes.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Your Recovery Journey</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {displayedNotes.map((note, index) => {
              const colors = [
                'bg-yellow-100 shadow-yellow-200',
                'bg-blue-100 shadow-blue-200',
                'bg-green-100 shadow-green-200',
                'bg-pink-100 shadow-pink-200',
                'bg-purple-100 shadow-purple-200',
                'bg-orange-100 shadow-orange-200'
              ];
              const colorClass = colors[index % colors.length];

              return (
                <div
                  key={note.id}
                  className={`${colorClass} rounded-sm p-5 shadow-md transform rotate-[-0.5deg] hover:rotate-0 transition-transform relative`}
                  style={{
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  {/* Sticky note "tape" effect at top */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-white/40 border-l border-r border-gray-300 rounded-sm"></div>

                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-sm font-bold text-gray-800">{formatDate(note.note_date)}</p>
                    </div>
                    <div className="flex gap-2">
                      {editingNote === note.id ? (
                        <>
                          <button
                            onClick={() => handleUpdateNote(note.id)}
                            disabled={loading}
                            className="text-lg text-green-700 hover:text-green-900 font-medium p-1"
                          >
                            ✓
                          </button>
                          <button
                            onClick={() => {
                              setEditingNote(null);
                              setEditContent('');
                            }}
                            className="text-lg text-gray-600 hover:text-gray-800 font-medium p-1"
                          >
                            ✕
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              setEditingNote(note.id);
                              setEditContent(note.content);
                            }}
                            className="text-lg text-gray-600 hover:text-gray-800 font-medium p-1"
                          >
                            ✎
                          </button>
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            disabled={loading}
                            className="text-lg text-red-600 hover:text-red-800 font-medium p-1"
                          >
                            🗑
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {editingNote === note.id ? (
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full p-3 bg-white/50 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                      rows={6}
                      maxLength={750}
                      disabled={loading}
                    />
                  ) : (
                    <p className="text-sm text-gray-800 whitespace-pre-wrap font-handwriting leading-relaxed">{note.content}</p>
                  )}
                </div>
              );
            })}
          </div>

          {notes.length > 5 && (
            <button
              onClick={() => setShowAllNotes(!showAllNotes)}
              className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              {showAllNotes ? 'Show less' : `Show all ${notes.length} notes`}
            </button>
          )}
        </div>
      )}

      {notes.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-sm">No recovery notes yet. Start by adding your first note above!</p>
        </div>
      )}
    </div>
  );
}
