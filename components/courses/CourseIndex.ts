import { lessons as brainDumpLessons, LessonInfo, SublessonInfo } from '../lessons/LessonIndex';
import { CourseInfo } from '../../types/course';

// Re-export lesson types for convenience
export type { LessonInfo, SublessonInfo };

/**
 * Central registry of all courses.
 * Each course has its own lessons array imported from separate lesson index files.
 * To add a new course:
 * 1. Create a new lesson index file (e.g., components/lessons/new-course/LessonIndex.ts)
 * 2. Import the lessons here
 * 3. Add a new course entry to the courses array
 */
export const courses: CourseInfo[] = [
  {
    slug: 'brain-dump',
    title: 'Ship Your First App',
    description: 'Learn to Build Full-Stack Apps with AI',
    priceCents: 1999,
    freeChapterCount: 2,
    lessons: brainDumpLessons,
  },
  // Add future courses here:
  // {
  //   slug: 'another-course',
  //   title: 'Another Course',
  //   description: 'Course description',
  //   priceCents: 2999,
  //   freeChapterCount: 1,
  //   lessons: anotherCourseLessons,
  // },
];

/**
 * Get a course by its URL slug
 */
export const getCourseBySlug = (slug: string): CourseInfo | undefined => {
  return courses.find(course => course.slug === slug);
};

/**
 * Get all lessons for a specific course
 */
export const getCourseLessons = (courseSlug: string): LessonInfo[] => {
  const course = getCourseBySlug(courseSlug);
  return course?.lessons ?? [];
};

/**
 * Get a specific lesson from a course by lesson ID
 */
export const getCourseLessonById = (courseSlug: string, lessonId: number): LessonInfo | undefined => {
  const lessons = getCourseLessons(courseSlug);
  return lessons.find(lesson => lesson.id === lessonId);
};

/**
 * Check if a lesson is free for a specific course
 */
export const isLessonFree = (courseSlug: string, lessonId: number): boolean => {
  const course = getCourseBySlug(courseSlug);
  if (!course) return false;
  return lessonId <= course.freeChapterCount;
};

/**
 * Get the free lessons for a course
 */
export const getFreeLessons = (courseSlug: string): LessonInfo[] => {
  const course = getCourseBySlug(courseSlug);
  if (!course) return [];
  return course.lessons.filter(lesson => lesson.id <= course.freeChapterCount);
};

/**
 * Get the paid lessons for a course
 */
export const getPaidLessons = (courseSlug: string): LessonInfo[] => {
  const course = getCourseBySlug(courseSlug);
  if (!course) return [];
  return course.lessons.filter(lesson => lesson.id > course.freeChapterCount);
};

/**
 * Get course price formatted for display
 */
export const getCoursePrice = (courseSlug: string): string => {
  const course = getCourseBySlug(courseSlug);
  if (!course) return '$0.00';
  return `$${(course.priceCents / 100).toFixed(2)}`;
};

/**
 * Get all active course slugs
 */
export const getAllCourseSlugs = (): string[] => {
  return courses.map(course => course.slug);
};

export default courses;
