import { DeepPartial } from 'utility-types';

import { UserGuide, UserInitializationState, UserPreference } from '@/types/user';
import { UserSettings } from '@/types/user/settings';

export interface IUserService {
  getUserRegistrationDuration: () => Promise<{
    createdAt: string;
    duration: number;
    updatedAt: string;
  }>;
  getUserState: () => Promise<UserInitializationState>;
  resetUserSettings: () => Promise<any>;
  updateGuide: (guide: Partial<UserGuide>) => Promise<any>;
  updatePreference: (preference: Partial<UserPreference>) => Promise<any>;
  updateUserSettings: (value: DeepPartial<UserSettings>, signal?: AbortSignal) => Promise<any>;
}
