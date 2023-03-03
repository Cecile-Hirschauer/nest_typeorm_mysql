import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProfileService } from '../service/profile.service';
import { CreateProfileDto } from '../dtos/CreateProfile.dto';
import { UpdateProfileDto } from '../dtos/UpdateProfile.dto';

@Controller('profiles')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  getProfiles() {
    return this.profileService.findProfiles();
  }

  @Get(':id')
  getOneProfileById(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.findOneProfileById(id);
  }

  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.createProfile(createProfileDto);
  }

  @Put(':id')
  updateProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProfileDto: UpdateProfileDto
  ) {
    return this.profileService.updateProfile(id, updateProfileDto);
  }

  @Delete(':id')
  deleteProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.deleteProfile(id);
  }
}
