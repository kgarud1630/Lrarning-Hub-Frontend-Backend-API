import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  Query,
  UseGuards 
} from '@nestjs/common';
import { CurrentUser, Roles, Public } from '@shared/decorators/user.decorator';
import { CreateCourseDto, UpdateCourseDto, PaginationDto } from '@shared/dto';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Public()
  @Get()
  async getAllCourses(@Query() paginationDto: PaginationDto) {
    return this.coursesService.getAllCourses(paginationDto);
  }

  @Public()
  @Get(':id')
  async getCourseById(@Param('id') id: string) {
    return this.coursesService.getCourseById(id);
  }

  @Post()
  @Roles('INSTRUCTOR', 'ADMIN')
  async createCourse(@CurrentUser() user: any, @Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.createCourse(user.id, createCourseDto);
  }

  @Put(':id')
  @Roles('INSTRUCTOR', 'ADMIN')
  async updateCourse(
    @Param('id') id: string,
    @CurrentUser() user: any,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.updateCourse(id, user.id, updateCourseDto);
  }

  @Delete(':id')
  @Roles('INSTRUCTOR', 'ADMIN')
  async deleteCourse(@Param('id') id: string, @CurrentUser() user: any) {
    return this.coursesService.deleteCourse(id, user.id);
  }

  @Get('instructor/:instructorId')
  async getCoursesByInstructor(@Param('instructorId') instructorId: string) {
    return this.coursesService.getCoursesByInstructor(instructorId);
  }

  @Get('category/:category')
  @Public()
  async getCoursesByCategory(@Param('category') category: string, @Query() paginationDto: PaginationDto) {
    return this.coursesService.getCoursesByCategory(category, paginationDto);
  }
}