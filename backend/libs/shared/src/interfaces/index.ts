import { Role, CourseLevel, LessonType } from '@prisma/client';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  duration?: string;
  students?: string;
  level: CourseLevel;
  category: string;
  badge?: string;
  whatYouWillLearn: string[];
  requirements: string[];
  instructorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Enrollment {
  userId: string;
  courseId: string;
  enrolledAt: Date;
}

export interface UserProgress {
  id: string;
  progressPercentage: number;
  lastAccessed: Date;
  userId: string;
  courseId: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  statusCode?: number;
}

export interface PaginationQuery {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}