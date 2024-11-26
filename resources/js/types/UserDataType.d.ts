export type UserDataType = {
    id: number;
    name: string;
    username: string;
    email: string;
    bio: string;
    date_of_birth: string;
    view_count: number;
    following_count: number;
    follower_count: number;
    follower_ids: number[];
    following_ids: number[];
    viewer_ids: number[];
    email_verified_at: string | null;
    profile_photo_url?: string;
    created_at: string;
    updated_at: string;
};
