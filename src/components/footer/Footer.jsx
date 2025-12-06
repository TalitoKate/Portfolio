import FindMe from '../findme/FindMe';
import SectionTitle from '../sectiontitle/SectionTitle';
import './footer.css';

export default function Footer()
{
    return(
        <>
        <section className="footer-section">
            <SectionTitle heading={"Find me at"} />
            <FindMe />
        </section>
        </>
    )
}