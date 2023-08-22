import { getAuthSession } from "@/lib/auth-options";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { UpdateNameForm } from "@/components/setting-forms";

const SettingsPage = async () => {
    const session = await getAuthSession();

    return (
        <main className="flex-1 sm:px-10 py-6 sm:py-10">
            <div className="border-b pb-6">
                <h1 className="font-semibold text-2xl">Settings</h1>
                <p className="font-light text-muted-foreground">
                    Manage your account settings here
                </p>
            </div>
            <section className="py-8">
                <Card className="">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">
                            Your Name
                        </CardTitle>
                        <CardDescription>
                            Please enter your full name you&lsquo;re comfortable
                            with.
                        </CardDescription>
                    </CardHeader>
                    <UpdateNameForm name={session?.user.name as string} />
                </Card>
            </section>
        </main>
    );
};

export default SettingsPage;
