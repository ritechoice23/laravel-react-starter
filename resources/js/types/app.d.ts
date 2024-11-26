declare namespace App.Data {
export type PolicyData = {
delete: boolean;
edit: boolean;
update: boolean;
create: boolean;
view: boolean;
};
export type UserShowData = {
id: number;
username: string;
email: string;
email_verified_at: string | null;
name: string;
profile_photo_url: string | null;
created_at: string;
updated_at: string;
};
}
