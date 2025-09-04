export const MICROSERVICE_TOKENS = {
  USER_SERVICE: 'USER_SERVICE',
  COURSE_SERVICE: 'COURSE_SERVICE',
  ENROLLMENT_SERVICE: 'ENROLLMENT_SERVICE',
  PAYMENT_SERVICE: 'PAYMENT_SERVICE',
  NOTIFICATION_SERVICE: 'NOTIFICATION_SERVICE',
  MEDIA_SERVICE: 'MEDIA_SERVICE',
} as const;

export const RABBITMQ_QUEUES = {
  USER_QUEUE: 'user_queue',
  COURSE_QUEUE: 'course_queue',
  ENROLLMENT_QUEUE: 'enrollment_queue',
  PAYMENT_QUEUE: 'payment_queue',
  NOTIFICATION_QUEUE: 'notification_queue',
  MEDIA_QUEUE: 'media_queue',
} as const;

export const EVENTS = {
  USER_CREATED: 'user.created',
  USER_UPDATED: 'user.updated',
  COURSE_CREATED: 'course.created',
  COURSE_UPDATED: 'course.updated',
  ENROLLMENT_CREATED: 'enrollment.created',
  PAYMENT_COMPLETED: 'payment.completed',
  NOTIFICATION_SEND: 'notification.send',
  MEDIA_UPLOADED: 'media.uploaded',
} as const;

export const REDIS_KEYS = {
  USER_PROFILE: (userId: string) => `user:profile:${userId}`,
  COURSE_DETAILS: (courseId: string) => `course:details:${courseId}`,
  USER_COURSES: (userId: string) => `user:courses:${userId}`,
  COURSE_STUDENTS: (courseId: string) => `course:students:${courseId}`,
} as const;

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },
  USERS: {
    BASE: '/users',
    PROFILE: '/users/profile',
    BY_ID: '/users/:id',
  },
  COURSES: {
    BASE: '/courses',
    BY_ID: '/courses/:id',
    ENROLL: '/courses/:id/enroll',
    CURRICULUM: '/courses/:id/curriculum',
  },
  ENROLLMENTS: {
    BASE: '/enrollments',
    BY_USER: '/enrollments/user/:userId',
    PROGRESS: '/enrollments/:id/progress',
  },
  PAYMENTS: {
    BASE: '/payments',
    CREATE_INTENT: '/payments/create-payment-intent',
    WEBHOOK: '/payments/webhook',
  },
  MEDIA: {
    BASE: '/media',
    UPLOAD: '/media/upload',
    BY_ID: '/media/:id',
  },
} as const;