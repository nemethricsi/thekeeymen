import { Container } from '@/components/Container';
import { StaticNavbar } from '@/components/StaticNavbar';
import { Locale } from '@/i18n-config';
import { externalLink } from '@/lib/utils';
import { fetchNavigation } from '@/sanity/lib/queries';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = await fetchNavigation({ locale });
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950 lg:pt-0">
      {data?.navigation && <StaticNavbar navItems={data.navigation} />}
      <main className="pt-32 lg:pt-36">
        <Container className="gap-16 pb-24 lg:gap-20">
          <div className="flex flex-col gap-6 text-neutral-700 select-none">
            <h1 className="font-serif text-3xl font-bold">
              Adatkezelési tájékoztató
            </h1>
            <p>
              A jelen{' '}
              <strong>Adatkezelési tájékoztató célja, hogy rögzítse</strong> a
              www.thekeeymen.com weboldalon (a továbbiakban: Weboldal) keresztül
              megvalósuló adatkezelések elveit, módját és feltételeit, valamint
              tájékoztatást nyújtson az Érintettek személyes adataik kezelésével
              kapcsolatos jogairól és jogérvényesítési lehetőségeiről.
            </p>
            <p>
              Az Adatkezelő a személyes adatokat a hatályos magyar jogszabályok,
              valamint az Európai Parlament és a Tanács (EU) 2016/679 rendelete
              (a továbbiakban: GDPR) rendelkezéseinek megfelelően,
              tisztességesen, jogszerűen és átlátható módon kezeli, és mindenkor
              biztosítja az adatok biztonságát.
            </p>
            <p>
              A jelen <strong>Adatkezelési tájékoztató hatálya kiterjed</strong>{' '}
              a Weboldal látogatóira, a Weboldalon keresztül vásárló
              felhasználókra, a hírlevélre feliratkozókra, valamint mindazokra,
              akik a Weboldalon keresztül bármely módon kapcsolatba lépnek az
              Adatkezelővel.
            </p>
            <p>
              Az Adatkezelő kijelenti, hogy a személyes adatok kezelése során
              kizárólag olyan adatokat kezel, amelyek az adott adatkezelési cél
              megvalósításához feltétlenül szükségesek, és az adatokat csak a
              szükséges ideig őrzi meg.
            </p>
            <h2 className="font-serif text-2xl font-bold">
              I. A SZOLGÁLTATÓ MINT ADATKEZELŐ ADATAI​
            </h2>
            <ul>
              <li>A Szolgáltató cégneve: Németh Richárd, egyéni vállalkozó</li>
              <li>A Szolgáltató adószáma: 90808560-1-39</li>
              <li>
                E-mail:{' '}
                <a href="mailto:introszfera@gmail.com" {...externalLink}>
                  hello@nemethrichard.hu
                </a>
              </li>
            </ul>
            <h2 className="font-serif text-2xl font-bold">
              II. FOGALOMMEGHATÁROZÁSOK
            </h2>
            <p>
              A jelen Adatkezelési tájékoztató alkalmazásában az alábbi fogalmak
              az alábbi jelentéssel bírnak:
            </p>
            <div className="flex flex-col gap-1">
              <strong>Adatkezelő:</strong>
              <p>
                az a természetes vagy jogi személy, aki/amely a személyes adatok
                kezelésének céljait és eszközeit meghatározza. Jelen tájékoztató
                vonatkozásában az Adatkezelő a www.thekeeymen.com weboldal
                üzemeltetője.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Érintett:</strong>
              <p>
                bármely azonosított vagy azonosítható természetes személy,
                akinek személyes adatát az Adatkezelő kezeli (pl. a weboldal
                látogatója, vásárlója, hírlevél-feliratkozója).
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Személyes adat:</strong>
              <p>
                az Érintettre vonatkozó bármely információ, amely alapján az
                Érintett közvetlenül vagy közvetve azonosítható (pl. név, e-mail
                cím, telefonszám, cím).
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Adatkezelés:</strong>
              <p>
                a személyes adatokon végzett bármely művelet vagy műveletek
                összessége, így különösen azok gyűjtése, rögzítése, tárolása,
                felhasználása, továbbítása vagy törlése.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Adatfeldolgozó:</strong>
              <p>
                az a természetes vagy jogi személy, aki/amely az Adatkezelő
                nevében személyes adatokat kezel (pl. tárhelyszolgáltató,
                számlázó program, futárszolgálat, hírlevélküldő rendszer).
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Hozzájárulás:</strong>
              <p>
                az Érintett önkéntes, konkrét és megfelelő tájékoztatáson
                alapuló, egyértelmű akaratnyilvánítása, amellyel beleegyezését
                adja személyes adatainak kezeléséhez.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Szerződés:</strong>
              <p>
                az Adatkezelő és az Érintett között a Weboldalon keresztül
                létrejövő adásvételi jogviszony, amely fizikai vagy digitális
                termék megvásárlására irányul.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Digitális tartalom:</strong>
              <p>
                olyan nem tárgyi formában létező adat vagy tartalom, amely
                elektronikus úton kerül a vásárló részére átadásra (pl. PDF
                formátumú kiadvány.).
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Cookie (süti):</strong>
              <p>
                a Weboldal látogatása során az Érintett eszközén elhelyezett kis
                adatfájl, amely a weboldal megfelelő működését, statisztikai
                mérését vagy marketing célú megjelenítését szolgálja.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Hírlevél:</strong>
              <p>
                az Adatkezelő által elektronikus úton küldött tájékoztató vagy
                marketing tartalmú üzenet, amelyre az Érintett önkéntesen
                iratkozik fel.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Adattovábbítás:</strong>
              <p>
                személyes adatok meghatározott harmadik személy részére történő
                hozzáférhetővé tétele.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <strong>Adattörlés:</strong>
              <p>
                a személyes adatok felismerhetetlenné tétele oly módon, hogy
                azok helyreállítása többé nem lehetséges.
              </p>
            </div>
            <h2 className="font-serif text-2xl font-bold">
              III. AZ ADATKEZELÉS ELVEI
            </h2>
            <p>
              Az Adatkezelő a személyes adatokat a vonatkozó jogszabályokkal,
              különösen a GDPR rendelkezéseivel összhangban,{' '}
              <strong>az alábbi alapelvek mentén kezeli:</strong>
            </p>
            <ul className="list-disc pl-8">
              <li>
                a személyes adatokat jogszerűen, tisztességesen és átlátható
                módon kezeli;
              </li>
              <li>
                az adatokat meghatározott, egyértelmű és jogszerű célból gyűjti,
                és azokat nem kezeli a célokkal össze nem egyeztethető módon;
              </li>
              <li>
                kizárólag olyan adatokat kezel, amelyek az adott adatkezelési
                cél eléréséhez feltétlenül szükségesek;
              </li>
              <li>
                biztosítja a személyes adatok pontosságát és naprakészségét;
              </li>
              <li>a személyes adatokat csak a szükséges ideig tárolja;</li>
              <li>
                megfelelő technikai és szervezési intézkedésekkel gondoskodik a
                személyes adatok biztonságáról.
              </li>
            </ul>
            <h3 className="font-serif text-xl font-bold">
              1. Az adatkezelés jogalapja
            </h3>
            <p>
              Az Adatkezelő a személyes adatokat{' '}
              <strong>az alábbi jogalapok valamelyike alapján kezeli:</strong>
            </p>
            <ul className="list-disc pl-8">
              <li>
                az Érintett hozzájárulása, különösen hírlevélre történő
                feliratkozás vagy marketing célú adatkezelés esetén;
              </li>
              <li>
                szerződés teljesítése, amikor az adatkezelés a weboldalon
                keresztül leadott megrendelés
              </li>
              <li>
                teljesítéséhez, a fizikai vagy digitális termék átadásához
                szükséges;
              </li>
              <li>
                jogi kötelezettség teljesítése, különösen számviteli és adózási
                kötelezettségek teljesítése céljából;
              </li>
              <li>
                jogos érdek, például a weboldal biztonságos működtetése vagy
                visszaélések megelőzése érdekében.
              </li>
            </ul>
            <h3 className="font-serif text-xl font-bold">
              2. A kezelt adatok köre
            </h3>
            <p>
              Az Adatkezelő az adatkezelés céljától függően{' '}
              <strong>az alábbi személyes adatokat kezelheti:</strong>
            </p>
            <ul className="list-disc pl-8">
              <li>név</li>
              <li>e-mail cím</li>
              <li>telefonszám</li>
              <li>számlázási cím</li>
              <li>szállítási cím</li>
              <li>
                vásárlással kapcsolatos adatok (megrendelt termék, vásárlás
                időpontja)
              </li>
              <li>hírlevél-feliratkozással kapcsolatos adatok</li>
              <li>
                a weboldal használatával összefüggő technikai adatok (pl.
                IP-cím, cookie adatok)
              </li>
            </ul>
            <p>Az Adatkezelő különleges személyes adatokat nem kezel.</p>
            <h3 className="font-serif text-xl font-bold">
              3. Az adatkezelés célja
            </h3>
            <p>
              A személyes adatok <strong>kezelésének célja különösen:</strong>
            </p>
            <ul className="list-disc pl-8">
              <li>a weboldal működtetése és biztonságának fenntartása;</li>
              <li>
                a weboldalon keresztül leadott megrendelések feldolgozása és
                teljesítése;
              </li>
              <li>
                fizikai termékek kiszállítása és digitális termékek elektronikus
                úton történő átadása;
              </li>
              <li>számlázási és jogszabályi kötelezettségek teljesítése;</li>
              <li>kapcsolattartás a vásárlókkal és érdeklődőkkel;</li>
              <li>
                hírlevelek és tájékoztató üzenetek küldése az Érintett előzetes
                hozzájárulása alapján;
              </li>
              <li>
                statisztikai és elemzési célú adatgyűjtés a weboldal fejlesztése
                érdekében.
              </li>
            </ul>
            <h2 className="font-serif text-2xl font-bold">
              IV. AZ ADATKEZELÉS IDŐTARTAMA, ADATOK MÓDOSÍTÁSA, TÖRLÉSE,
              TILTAKOZÁS AZ ADATKEZELÉS ELLEN
            </h2>
            <h3 className="font-serif text-xl font-bold">
              1. Az adatkezelés időtartama
            </h3>
            <p>
              Az Adatkezelő a személyes adatokat kizárólag az adatkezelés
              céljának megvalósulásához szükséges ideig kezeli, illetve addig,
              ameddig azt jogszabály előírja.
            </p>
            <ul className="list-disc pl-8">
              <li>
                A vásárlással és számlázással kapcsolatos adatokat az Adatkezelő
                a számviteli jogszabályokban meghatározott ideig, jellemzően 8
                évig őrzi meg.
              </li>
              <li>
                A szerződés teljesítésével összefüggő adatokat a szerződés
                megszűnését követően a polgári jogi igények érvényesítésére
                nyitva álló időtartamig kezeli.
              </li>
              <li>
                A hírlevél-feliratkozással kapcsolatos adatokat az Adatkezelő az
                Érintett leiratkozásáig kezeli.
              </li>
              <li>
                A technikai jellegű adatok (pl. cookie-k) kezelése az adott
                cookie típusától függően, az azokhoz rendelt élettartamig
                történik.
              </li>
              <li>
                Az Adatkezelő az adatkezelési cél megszűnését követően a
                személyes adatokat törli vagy anonimizálja.
              </li>
            </ul>
            <h3 className="font-serif text-xl font-bold">
              2. Az adatok módosítása és törlése
            </h3>
            <p>Az Érintett jogosult arra, hogy kérésére az Adatkezelő:</p>
            <ul className="list-disc pl-8">
              <li>tájékoztatást adjon a kezelt személyes adatairól;</li>
              <li>a pontatlan vagy hiányos személyes adatokat helyesbítse;</li>
              <li>
                kérje személyes adatainak törlését, amennyiben azok kezelése már
                nem szükséges az adatkezelés céljához, vagy az adatkezelés
                jogalapja megszűnt.
              </li>
            </ul>
            <p>
              Az Érintett a fenti jogait az Adatkezelő elérhetőségein keresztül
              gyakorolhatja. Az Adatkezelő a kérelmeket indokolatlan késedelem
              nélkül, de legkésőbb 30 napon belül megvizsgálja és megválaszolja.
            </p>
            <p>
              Az Adatkezelő felhívja a figyelmet arra, hogy jogszabályi
              kötelezettség (pl. számviteli előírások) fennállása esetén az
              adatok törlésére csak a kötelező megőrzési idő leteltét követően
              kerülhet sor.
            </p>
            <h3 className="font-serif text-xl font-bold">
              3. Tiltakozás az adatkezelés ellen
            </h3>
            <p>
              Az Érintett jogosult arra, hogy bármikor tiltakozzon személyes
              adatainak kezelése ellen, amennyiben az adatkezelés jogalapja az
              Adatkezelő jogos érdeke.
            </p>
            <p>
              Tiltakozás esetén az Adatkezelő a személyes adatokat nem kezelheti
              tovább, kivéve, ha az Adatkezelő bizonyítja, hogy az adatkezelést
              olyan kényszerítő erejű jogos okok indokolják, amelyek elsőbbséget
              élveznek az Érintett érdekeivel, jogaival és szabadságaival
              szemben, vagy amelyek jogi igények előterjesztéséhez,
              érvényesítéséhez vagy védelméhez kapcsolódnak.
            </p>
            <p>
              Marketing célú adatkezelés esetén az Érintett tiltakozása esetén
              az Adatkezelő a személyes adatokat haladéktalanul törli, és az
              adatkezelést megszünteti.
            </p>
            <h2 className="font-serif text-2xl font-bold">
              V. A WEBOLDAL TARTALMA
            </h2>
            <p>
              A www.thekeeymen.com weboldalon megjelenő valamennyi tartalom –
              így különösen, de nem kizárólagosan a szövegek, képek, grafikai
              elemek, dokumentumok, letölthető anyagok, valamint a digitális
              termékek – szerzői jogi védelem alatt állnak.
            </p>
            <p>
              A weboldalon található tartalmak szerzői jogi jogosultja az
              Adatkezelő, illetve az Adatkezelő által feljogosított harmadik
              személy. A tartalmak előzetes írásbeli engedély nélkül nem
              másolhatók, nem terjeszthetők, nem hozhatók nyilvánosságra, nem
              dolgozhatók át, és nem használhatók fel kereskedelmi célra.
            </p>
            <p>
              A weboldalon megvásárolható digitális tartalmak (pl. PDF formátumú
              kiadvány) kizárólag személyes felhasználásra szolgálnak. A
              digitális tartalmak jogosulatlan sokszorosítása, megosztása vagy
              továbbértékesítése jogsértőnek minősül, és jogi következményeket
              vonhat maga után.
            </p>
            <p>
              A weboldalon található tartalmak jogellenes felhasználása esetén
              az Adatkezelő jogosult a jogszabályok által biztosított jogi
              lépések megtételére.
            </p>
            <h2 className="font-serif text-2xl font-bold">
              VI. TÁJÉKOZTATÁS KÉRÉSE
            </h2>
            <p>
              Az Érintett jogosult arra, hogy az adatkezelőtől tájékoztatást
              kérjen arra vonatkozóan, hogy személyes adatainak kezelése
              folyamatban van-e, és amennyiben igen, jogosult arra, hogy a
              kezelt személyes adatokról és az adatkezelés körülményeiről
              tájékoztatást kapjon.
            </p>
            <p>
              Az Érintett <strong>jogosult különösen arra</strong>, hogy
              tájékoztatást kapjon:
            </p>
            <ul className="list-disc pl-8">
              <li>a kezelt személyes adatok köréről;</li>
              <li>az adatkezelés céljáról és jogalapjáról;</li>
              <li>az adatkezelés időtartamáról;</li>
              <li>az esetleges adattovábbítás címzettjeiről;</li>
              <li>az Érintettet megillető jogokról.</li>
            </ul>
            <p>
              A tájékoztatás kérésére az Érintett az Adatkezelő elérhetőségein
              keresztül, írásban jogosult. Az Adatkezelő a kérelem beérkezésétől
              számított legfeljebb 30 napon belül ad választ, közérthető
              formában.
            </p>
            <p>
              Az Adatkezelő a tájékoztatást első alkalommal díjmentesen
              biztosítja. Amennyiben az Érintett kérelme egyértelműen
              megalapozatlan vagy túlzó, az Adatkezelő jogosult adminisztratív
              költségeinek megfelelő díjat felszámítani, vagy a kérelem
              teljesítését megtagadni.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
}
