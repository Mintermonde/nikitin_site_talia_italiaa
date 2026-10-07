import P1_sec1 from '../../components/Page1/P1_sec1';
import P1_sec2 from '../../components/Page1/P1_sec2';
import P1_sec3 from '../../components/Page1/P1_sec3';
import P1_sec4 from '../../components/Page1/P1_sec4';
import P1_sec5 from '../../components/Page1/P1_sec5';
import P1_sec6 from '../../components/Page1/P1_sec6';
import P1_sec7 from '../../components/Page1/P1_sec7';

export default function Page1() {
  return (
    <main className="landing_page_flow">
      <P1_sec1 />
      <P1_sec2 />
      <P1_sec3 />
      <P1_sec4 />
      <P1_sec5 />
      <P1_sec6 />
      <P1_sec7 />
    </main>
  );
}