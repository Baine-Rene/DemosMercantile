import { Abouthero } from "./components/abouthero";
import { Team } from "./components/team";

export default function About() {
    return (
        <>
            <main>
                <Abouthero title="Our Journey" description="Incorporated in Uganda on December 27, 2023 (Reg. No. 80034510830110), we are a trusted partner to food processors, wholesalers, and retailers across regional and international markets, driven by sustainability, quality, and customer satisfaction." />

                <Team />
            </main>
        </>
    )
}