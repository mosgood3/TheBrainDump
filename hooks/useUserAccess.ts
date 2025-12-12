import { useAuth } from '../context/AuthContext';

export const useUserAccess = () => {
  const { user, userProfile, isPaid, loading } = useAuth();

  // Check if all lessons should be unlocked
  const hasFullAccess = () => {
    return isPaid;
  };

  // Check if user can access a specific lesson
  const canAccessLesson = (lessonId: number) => {
    // If user is not logged in, no access
    if (!user) return false;

    // If user has paid, they have access to all lessons
    if (isPaid) return true;

    // Free users have access to lessons 1 and 2
    if (lessonId === 1 || lessonId === 2) return true;

    // All other lessons are locked for free users
    return false;
  };

  // Check if user can access a specific sublesson
  const canAccessSublesson = (lessonId: number, sublessonId: string) => {
    return canAccessLesson(lessonId);
  };

  // Check if the "Unlock Full Course" button should be shown
  const shouldShowUnlockButton = () => {
    return user && !isPaid;
  };

  // Get user's current access level
  const getAccessLevel = () => {
    if (!user) return 'guest';
    if (isPaid) return 'premium';
    return 'free';
  };

  return {
    user,
    userProfile,
    isPaid,
    loading,
    hasFullAccess,
    canAccessLesson,
    canAccessSublesson,
    shouldShowUnlockButton,
    getAccessLevel
  };
};