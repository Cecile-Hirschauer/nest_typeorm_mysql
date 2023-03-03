import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from '../../typeorm/entities/Profile';
import { Repository } from 'typeorm';
import { CreateProfileParams, UpdateProfileParams } from '../../utils/Types';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  findProfiles() {
    return this.profileRepository.find();
  }

  findOneProfileById(id: number) {
    return this.profileRepository.findOneBy({ id });
  }

  createProfile(profileDetails: CreateProfileParams) {
    const newProfile = this.profileRepository.create({
      ...profileDetails,
    });
    return this.profileRepository.save(newProfile);
  }

  updateProfile(id: number, updateProfileDetails: UpdateProfileParams) {
    return this.profileRepository.update({ id }, { ...updateProfileDetails });
  }

  deleteProfile(id: number) {
    return this.profileRepository.delete(id);
  }
}
