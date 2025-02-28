import { describe, it, expect } from 'vitest';
import searchInFields from '../searchInFields';
import { EmployeeType } from '../../types/types';

describe('searchInFields', () => {
  const employees: EmployeeType[] = [
    {
      id: 1,
      name: 'João',
      job: 'Back-end',
      admission_date: '2019-12-02T00:00:00.000Z',
      phone: '5551234567890',
      image:
        'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
    },
    {
      id: 2,
      name: 'Roberto',
      job: 'Front-end',
      admission_date: '2020-03-12T00:00:00.000Z',
      phone: '5550321654789',
      image:
        'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
    },
    {
      id: 3,
      name: 'Maria',
      job: 'Front-end',
      admission_date: '2020-03-15T00:00:00.000Z',
      phone: '5557894561230',
      image:
        'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
    },
  ];

  it('should return an empty array when employees list is null', () => {
    expect(searchInFields(null, 'João')).toEqual([]);
  });

  it('should return employees whose name matches the search string', () => {
    expect(searchInFields(employees, 'João')).toEqual([
      {
        id: 1,
        name: 'João',
        job: 'Back-end',
        admission_date: '2019-12-02T00:00:00.000Z',
        phone: '5551234567890',
        image:
          'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
      },
    ]);
  });

  it('should return employees whose job matches the search string', () => {
    expect(searchInFields(employees, 'Front-end')).toEqual([
      {
        id: 2,
        name: 'Roberto',
        job: 'Front-end',
        admission_date: '2020-03-12T00:00:00.000Z',
        phone: '5550321654789',
        image:
          'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
      },
      {
        id: 3,
        name: 'Maria',
        job: 'Front-end',
        admission_date: '2020-03-15T00:00:00.000Z',
        phone: '5557894561230',
        image:
          'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
      },
    ]);
  });

  it('should return employees whose formatted phone number matches the search string', () => {
    expect(searchInFields(employees, '+55 (51) 234567890')).toEqual([
      {
        id: 1,
        name: 'João',
        job: 'Back-end',
        admission_date: '2019-12-02T00:00:00.000Z',
        phone: '5551234567890',
        image:
          'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
      },
    ]);
  });

  it('should be case insensitive', () => {
    expect(searchInFields(employees, 'back-end')).toEqual([
      {
        id: 1,
        name: 'João',
        job: 'Back-end',
        admission_date: '2019-12-02T00:00:00.000Z',
        phone: '5551234567890',
        image:
          'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
      },
    ]);
  });

  it('should return an empty array if no match is found', () => {
    expect(searchInFields(employees, 'Doctor')).toEqual([]);
  });
});
