import { redirect } from "next/navigation"
import type { Session } from "next-auth" 

interface Props {
    url: string
    session: Session | null
}

export const redirectProtectedRoutes = async ({url, session}: Props) => {
    if(!session) {
        return redirect(url)
    }
}