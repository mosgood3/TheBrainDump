// Stub auth hooks - backend removed

export const useAuthActions = () => {
  const signInWithGoogle = async () => {
    console.log('Auth backend removed - no-op');
    return { user: null, error: 'Authentication backend has been removed' };
  };

  const signInWithEmail = async (email: string, password: string) => {
    console.log('Auth backend removed - no-op');
    return { user: null, error: 'Authentication backend has been removed' };
  };

  const signUpWithEmail = async (email: string, password: string) => {
    console.log('Auth backend removed - no-op');
    return { user: null, error: 'Authentication backend has been removed', emailSent: false };
  };

  const logout = async () => {
    console.log('Auth backend removed - no-op');
    return { error: null };
  };

  const resetPassword = async (email: string) => {
    console.log('Auth backend removed - no-op');
    return { error: 'Authentication backend has been removed' };
  };

  const resendEmailVerification = async () => {
    console.log('Auth backend removed - no-op');
    return { error: 'Authentication backend has been removed' };
  };

  const updatePassword = async (newPassword: string) => {
    console.log('Auth backend removed - no-op');
    return { error: 'Authentication backend has been removed' };
  };

  const updateProfile = async (updates: { full_name?: string; avatar_url?: string }) => {
    console.log('Auth backend removed - no-op');
    return { error: 'Authentication backend has been removed' };
  };

  return {
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    logout,
    resetPassword,
    resendEmailVerification,
    updatePassword,
    updateProfile,
  };
};
