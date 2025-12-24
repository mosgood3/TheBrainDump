import { LessonInfo } from '../components/lessons/LessonIndex';

export interface CourseInfo {
  slug: string;
  title: string;
  description: string;
  priceCents: number;
  freeChapterCount: number;
  lessons: LessonInfo[];
}

export interface CourseAccess {
  courseSlug: string;
  purchasedAt: string;
}
