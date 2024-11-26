import InputError from '@/components/ui/InputError';
import InputLabel from '@/components/ui/InputLabel';
import {Link, useForm, usePage} from '@inertiajs/react';
import {Transition} from '@headlessui/react';
import {FormEventHandler} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {AppPageProps} from '@/types';

export default function UpdateProfileInformation({mustVerifyEmail, status, className = ''}: {
    mustVerifyEmail: boolean,
    status?: string,
    className?: string
}) {
    const user = usePage<AppPageProps>().props.auth.user;

    const {data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        name: user.name,
        username: user.username,
        email: user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name"/>
                    <Input
                        id="name"
                        className="block w-full mt-1"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoFocus={true}
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.name}/>
                </div>
                <div>
                    <InputLabel htmlFor="name" value="Username"/>
                    <Input
                        id="name"
                        className="block w-full mt-1"
                        value={data.username}
                        onChange={(e) => setData('username', e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.username}/>
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email"/>

                    <Input
                        id="email"
                        type="email"
                        className="block w-full mt-1"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email}/>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Save</Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}