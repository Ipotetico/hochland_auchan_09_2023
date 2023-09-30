import React from 'react'
import './Regulamin.scss'

const Regulamin = ({ open, setOpen }) => {




    return (
        <>

            <div className={open ? "regulamin open" : "regulamin"}>

                <img onClick={() => setOpen(false)} className='close' src={process.env.PUBLIC_URL + `/images/close.svg`} alt="" />
                <div className="tresc">
                    <h1>   REGULAMIN KONKURSU PROWADZONEGO <br /> POD NAZWĄ „WYGRAJ Z ALMETTE”</h1>

                    <h2>
                        § 1. POSTANOWIENIA OGÓLNE
                    </h2>
                    <ul>
                        <li>
                            Konkurs będzie prowadzony pod nazwą „Wygraj z Almette” (zwany dalej „Konkursem”).
                        </li>
                        <li>
                            Niniejszy regulamin określa zasady udziału w Konkursie, zasady jego przebiegu, a także nadzoru nad jego przeprowadzeniem oraz zasady przeprowadzania postępowań reklamacyjnych (zwany dalej „Regulaminem”).
                        </li>
                        <li>
                            Organizatorem Konkursu i przyrzekającym nagrodę zgodnie z art. 919 i art. 921 Kodeksu cywilnego jest Growth Design Studio Sp. z o.o., z siedzibą w Warszawie, ul. Marysińska 4c, 04-617 Warszawa, wpisana do rejestru przedsiębiorców prowadzonego przez Sąd Rejonowy dla m.st. Warszawy w Warszawie, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS 0000794207, nr NIP: 9522198023, wysokość kapitału zakładowego: 5 000,00 zł (zwany dalej „Organizatorem”).
                        </li>
                        <li>
                            Kontakt w sprawie Konkursu:
                            <a href="mailto:konkurs@wygrajzalmette.pl"> konkurs@wygrajzalmette.pl</a>. Konkurs prowadzony będzie na terenie całej Polski, we wszystkich sklepach z logo sieci Auchan (zarówno stacjonarnych jak i internetowym) prowadzących sprzedaż serów marki Almette.
                        </li>
                        <li>
                            Uczestnikiem Konkursu może być każda pełnoletnia osoba fizyczna, mająca pełną zdolność do czynności prawnych, zamieszkała na terenie Polski, dokonująca zakupu produktów uprawniających do wzięcia udziału w Konkursie, w celu niezwiązanym bezpośrednio z jej działalnością gospodarczą lub zawodową, w placówkach handlowych Auchan prowadzących sprzedaż produktów objętych Konkursem (zwany dalej „Uczestnikiem”).
                        </li>
                        <li>
                            Konkurs rozpocznie się i trwać będzie od 12.10.2023 roku do 10.12.2023 roku, przy czym ostatnim dniem Konkursu jest dzień zakończenia procedury weryfikacyjnej wskazany w §3 ust. 9 pkt f) Regulaminu.
                        </li>
                        <li>
                            Sprzedaż produktów objętych Konkursem rozpocznie się 12.10.2023 roku, a zakończy 26.10.2023 roku lub do wyczerpania zapasów („Okres Promocji”). Konkurs obejmuje wszystkie sery Almette z oznaczeniem loteryjnym - zwane dalej „Produktami Promocyjnymi”. Zakup towarów objętych Konkursem przed lub po w/w terminie nie uprawnia do wzięcia udziału w Konkursie.
                        </li>
                        <li>
                            W Konkursie nie mogą brać udziału pracownicy Organizatora Konkursu, a także pracownicy spółki Hochland Polska Sp. z o.o. z siedzibą w Kaźmierzu, oraz członkowie ich najbliższych rodzin. Przez „członków najbliższej rodziny” rozumie się wstępnych, zstępnych, rodzeństwo, małżonków, konkubentów oraz osoby pozostające w stosunku przysposobienia. Przez „pracowników” rozumie się także osoby wykonujące świadczenia na rzecz w/w podmiotów na podstawie umowy cywilnoprawnej, w szczególności na podstawie umowy zlecenia, umowy o dzieło lub umowy o świadczenie usług.
                        </li>
                        <li>
                            W związku prowadzeniem Konkursu Organizator świadczy na rzecz Uczestników usługi elektroniczne za pośrednictwem strony internetowej www.wygrajzalmette.pl oraz poczty elektronicznej, w szczególności polegające na umożliwieniu uczestnictwa w Konkursie i utrzymywania kont Uczestników, a także kontaktowania, weryfikacji warunków uczestnictwa w Konkursie oraz przyznania nagród.
                        </li>

                    </ul>
                    <h2>
                        §2 WARUNKI UCZESTNICTWA W KONKURSIE
                    </h2>
                    <ul>
                        <li>Aby wziąć udział w Konkursie należy w terminie od godz. 00:00:00 dnia 12.10.2023 roku do godz. 23:59:59 dnia 26.10.2023 roku:
                            <ol className="podpunkty">
                                <li>
                                    dokonać zakupu dwóch Produktów Promocyjnych (Almette) z oznaczeniem loteryjnym,
                                </li>
                                <li>
                                    wykonać zadanie konkursowe polegające na przygotowaniu opisu: <span className='italic'>„Opisz kuchnię swoich marzeń”</span>  - zadanie konkursowe powinno być wykonane w sposób kreatywny, nietuzinkowy i ciekawy (zakazuje się dostarczania treści o charakterze bezprawnym) - a także
                                </li>
                                <li>
                                    dokonać prawidłowego zgłoszenia do udziału w Konkursie, w sposób określony w ust. 4 poniżej.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Uczestnik jest zobowiązany zachować oryginał dowodu/dowodów zakupu Produktów Promocyjnych objętych Konkursem (paragon fiskalny, faktura VAT - wystawione na osobę fizyczną nieprowadzącą działalności gospodarczej) w celu potwierdzenia uprawnień do ewentualnej nagrody. Dzień i godzina na dowodzie/dowodach zakupu nie mogą być późniejsze niż dzień i godzina dokonania zgłoszenia w Konkursie, którego ma dotyczyć ten dowód/dowody, tj. konkretne zgłoszenie musi zostać wykonane po zakupie Produktów Promocyjnych.
                        </li>
                        <li>
                            Prawidłowe zgłoszenie udziału w Konkursie, dla swej ważności i skuteczności polega na wypełnieniu przez Uczestnika formularza on-line na stronie <a href="http://www.wygrajzalmette.pl">www.wygrajzalmette.pl</a>  oraz wprowadzeniu przez Uczestnika zadania konkursowego. Zgłoszenie udziału w Konkursie wymaga również podania numeru dowodu zakupu Produktów promocyjnych (tj. nr paragonu fiskalnego lub faktury VAT), oraz potwierdzenia o poinformowaniu o polityce prywatności, znajdującej się na stronie <a href="http://www.wygrajzalmette.pl">www.wygrajzalmette.pl</a>. Formularz on-line wymaga podania danych osobowych Uczestnika koniecznych do weryfikacji i realizacji prawa do Nagrody: imię i nazwisko, adres e-mail.
                        </li>
                        <li>
                            Przesłane zgłoszenie zostanie potwierdzone na stronie internetowej <a href="http://www.wygrajzalmette.pl">www.wygrajzalmette.pl</a> na banerze w formie komunikatu bezpośrednio po dokonaniu zgłoszenia w terminie od 12.10.2023 roku do 26.10.2023 roku. W Konkursie ważne są jedynie zgłoszenia wysyłane za pośrednictwem formularza zamieszczonego na stronie internetowej <a href="http://www.wygrajzalmette.pl">www.wygrajzalmette.pl</a>, tj. Nie będą uwzględniane zgłoszenia wysyłane za pośrednictwem poczty e-mail.
                        </li>
                        <li>
                            Każdy Uczestnik może wziąć udział w Konkursie poprzez dokonanie zgłoszenia za pośrednictwem strony internetowej <a href="http://www.wygrajzalmette.pl">www.wygrajzalmette.pl</a> dowolną ilość razy, pod warunkiem, że ilość dokonanych zgłoszeń odpowiada ilości zakupionych Produktów promocyjnych objętych Konkursem, z tym ograniczeniem, że potwierdzenie zakupu więcej niż dwóch Produktów Promocyjnych objętych Konkursem jednym dowodem zakupu (paragonem lub fakturą), uprawnia Uczestnika wyłącznie do dokonania jednego zgłoszenia w zakresie tego dowodu zakupu.
                        </li>
                        <li>
                            W Konkursie nie będą uwzględniane:
                            <ol className="podpunkty">
                                <li>
                                    zgłoszenia za pośrednictwem strony <a href="http://www.wygrajzalmette.pl">www.wygrajzalmette.pl</a>  nie spełniające warunków określonych w ust. 1 lit. a i b niniejszego paragrafu,
                                </li>
                                <li>
                                    zgłoszenia wysłane inaczej niż za pośrednictwem formularza na stronie <a href="http://www.wygrajzalmette.pl">www.wygrajzalmette.pl</a>,
                                </li>
                                <li>zgłoszenia niezawierające nr dowodu zakupu Produktów Promocyjnych,</li>
                                <li>
                                    zgłoszenia zawierające wykonanie zadania konkursowego, których treść narusza dobre obyczaje, przepisy prawne, jest obraźliwe, niemoralne lub zawiera inne treści o charakterze bezprawnym.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Zgłoszenie udziału w Konkursie jest równoznaczne z akceptacją przez Uczestnika Regulaminu w całości. Uczestnik zobowiązuje się do przestrzegania określonych w nim zasad, jak również potwierdza, iż spełnia wszystkie warunki, które uprawniają go do udziału w Konkursie.
                        </li>
                        <li>
                            Uczestnik nie może przenosić uczestnictwa w Konkursie oraz praw i obowiązków z nim związanych, w tym także prawa do żądania wydania nagrody, na rzecz osób trzecich.
                        </li>
                        <li>
                            Uczestnik może w każdej chwili zrezygnować z uczestnictwa w Konkursie poprzez cofnięcie zgody na przetwarzanie danych osobowych na adres e-mail: <a href="mailto:daneosobowe@hochland.com">daneosobowe@hochland.com</a>, lub złożenia stosownego oświadczenia o rezygnacji z udziału w Konkursie do Organizatora na jego adres: ul. Marysińska 4c, 04 – 617 Warszawa.
                        </li>
                    </ul>
                    <h2>§3 NAGRODY I ZASADY ICH PRZYZNAWANIA</h2>

                    <ul>
                        <li>
                            Nagrodami  w Konkursie są:

                            <ol className="podpunkty">
                                <li>
                                    Nagroda I stopnia – 10 000 zł. Do nagrody I stopnia przewidziano dodatkowe świadczenie pieniężne o wartości 1111 PLN, które zostanie potrącone przy wydaniu nagrody z przeznaczeniem na zapłatę podatku dochodowego z tytułu wygranej w Konkursie. Łączna wartość Nagrody I stopnia wynosi 11 111 PLN. Przewidziano 1 nagrodę I stopnia. Dana kwota zostanie przelana na konto bankowe podane przez Laureata.
                                </li>
                                <li>
                                    Nagrody II stopnia –Blender kielichowy PHILIPS HR2291/41, o wartości brutto 251 PLN. Do każdej nagrody II stopnia przewidziano dodatkowe świadczenie pieniężne o wartości 27,89 PLN, które zostanie potrącone przy wydaniu nagrody z  przeznaczeniem na zapłatę podatku dochodowego z tytułu wygranej w Konkursie. Łączna wartość nagrody II stopnia wynosi 278,89 PLN. Przewidziano 15 nagród II stopnia. Jeden Uczestnik może wygrać tylko jedną nagrodę II stopnia, weryfikacja odbędzie się na podstawie podanych danych osobowych. Nagrody II-go stopnia wybierane są każdego dnia, ale uczestnik zostaje poinformowany o zwycięstwie po zakończeniu konkursu.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Łączna wartość nagród wynosi brutto – 15 294, 35 PLN.
                        </li>
                        <li>
                            Organizator powoła Komisję Konkursową składającą się z trzech osób wskazanych przez Organizatora. Komisja Konkursowa będzie obradowała na niejawnych posiedzeniach w siedzibie Organizatora do dnia 09.11.2023 roku.
                        </li>
                        <li>
                            Organizator może opublikować na stronie Internetowej: www.wygrajzalmette.pl imię i pierwszą literę nazwiska Laureata oraz nazwę miejscowości i ulicy, przy której znajduje się sklep, w którym dokonano zakupu Produktu Promocyjnego zgłoszonego do Konkursu.
                        </li>
                        <li>
                            Wśród wszystkich zgłoszeń Komisja Konkursowa dokona wyboru 16 najlepiej wykonanych zadań konkursowych, których autorzy otrzymają nagrodę. Dodatkowo zostanie wyłoniona lista 5 laureatów rezerwowych.
                        </li>
                        <li>
                            W ocenie wykonania zadania konkursowego przez Uczestników, Komisja Konkursowa będzie stosowała następujące kryteria:

                            <ol className="podpunkty">
                                <li>
                                    oryginalność wykonania zadania,
                                </li>
                                <li>
                                    pomysłowość,
                                </li>
                                <li>
                                    przydatność w działaniach marketingowych dla Organizatora lub spółki Hochland Polska Sp. z o.o. z siedzibą w Kaźmierzu.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Decyzja Komisji Konkursowej w zakresie wyboru Zadań Konkursowych jest ostateczna i wiążąca. Komisja zastrzega sobie prawo do wyboru mniejszej/lub żadnej ilości zgłoszeń, w sytuacji, gdy zadania konkursowe zdaniem Komisji, nie będą na wystarczającym poziomie by zakwalifikować je do przyznania nagrody.
                        </li>
                        <li>
                            Do zadań Komisji Konkursowej należy:
                            <ol className="podpunkty">
                                <li>
                                    Dokonanie oceny prawidłowości Zgłoszeń udziału w Konkursie,
                                </li>
                                <li>
                                    rozstrzygnięcie Konkursu (ocena Zadań Konkursowych przesłanych przez Uczestników) zgodnie z postanowieniami niniejszego Regulaminu oraz zasadami pełnej rzetelności przeprowadzonych czynności,
                                </li>
                                <li>
                                    sporządzenie protokołu z podaniem wyników,
                                </li>
                                <li>
                                    sporządzenie listy laureatów Konkursu, którym przyznano prawo do nagrody, zwanych dalej „Laureatami”,
                                </li>
                                <li>
                                    sporządzenie listy rezerwowej Laureatów,
                                </li>
                                <li>
                                    weryfikacja prawa Laureata do nagrody,
                                </li>
                                <li>
                                    prowadzenie postępowań reklamacyjnych.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Weryfikacja prawa do nagrody będzie prowadzona w następujący sposób:
                            <ol className="podpunkty">
                                <li>
                                    W ciągu 14 dni od daty posiedzenia Komisji, Uczestnik otrzyma w imieniu Organizatora e-mail, na adres, który został podany w Formularzu on-line przy Zgłoszeniu udziału w Konkursie,
                                </li>
                                <li>
                                    Uczestnik w wiadomości e-mail zostanie powiadomiony o wyniku Konkursui poproszony o potwierdzenie uczestnictwa w Konkursie oraz danych osobowych i adresowych koniecznych do wydania nagrody (imię, nazwisko, adres zamieszkania wraz z ulicą i numerem domu/mieszkania, kodem pocztowym i miejscowością),
                                </li>
                                <li>
                                    Organizator zażąda od Uczestnika przesłania w terminie 3 dni drogą elektroniczną zdjęcia lub skanu oryginału dowodu zakupu (paragon fiskalny lub faktura VAT) nie przekraczający 3 MB, na wskazany adres e-mail w celu weryfikacji prawa Laureata do nagrody. Organizator przedstawi takie żądanie poprzez e-mail, określony w pkt b) powyżej. W razie wątpliwości co do autentyczności zdjęcia lub skanu, Organizator może dodatkowo zażądać przesłania oryginału wymaganych dokumentów na adres: Growth Design Studio Sp. z o.o., z siedzibą Warszawie, ul. Marysińska 4c, 04 – 617 Warszawa w ciągu 5 dni od daty przedstawienia takiego żądania przez Organizatora lub zdjęcia dowodu zakupu w innym formacie niż przesłany (jpg albo png). O zachowaniu terminu decyduje data stempla pocztowego.
                                </li>
                                <li>
                                    W przypadku, gdy Uczestnik nie spełni warunków określonych w pkt b) i c) powyżej wówczas ten Uczestnik traci status Laureata i prawo do nagrody, a następnie nastąpi weryfikacja prawa do nagrody Uczestnika z listy rezerwowej. Uczestnik z listy rezerwowej zostanie powiadomiony o ewentualnej wygranej za pomocą e-maila.
                                </li>
                                <li>
                                    Weryfikacja Uczestników rezerwowych będzie przebiegała z procedurą określoną w powyższych punktach do czasu przyznania prawa do nagrody lub zakończenia listy rezerwowej.
                                </li>
                                <li>
                                    Procedura weryfikacyjna zakończy się najpóźniej w dniu 10.12.2023 roku. Nagrody, które nie zostaną przyznane do tego dnia w trybie określonym w niniejszym paragrafie, pozostają do dyspozycji Organizatora.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Laureat traci prawo do nagrody, gdy:
                            <ol className="podpunkty">
                                <li>
                                    nie dopełni któregoś z warunków Regulaminu; lub
                                </li>
                                <li>
                                    nie prześle stosownego dowodu zakupu w odpowiedniej formie; lub
                                </li>
                                <li>
                                    z przyczyny leżącej po swojej stronie nie będzie mógł odebrać nagrody; lub
                                </li>
                                <li>
                                    odmówi podania swoich danych koniecznych do przesłania nagrody; lub
                                </li>
                                <li>
                                    przesłany dowód zakupu będzie podrobiony lub uszkodzony w sposób uniemożliwiający jego odczytanie; lub
                                </li>
                                <li>
                                    przesłany dowód zakupu będzie miał późniejszą datę niż data przesłania zgłoszenia przez Laureata za pomocą strony; lub
                                </li>
                                <li>
                                    przesłany dowód zakupu będzie dotyczył innego produktu niż Produkty Promocyjne objęte Konkursem.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Jeden Uczestnik może wygrać tylko jedną nagrodę.
                        </li>
                    </ul >
                    <h2>
                        §4 WYDANIE NAGRÓD
                    </h2>
                    <ul>
                        <li>
                            Nagroda w Konkursie zostanie wydana Laureatom najpóźniej do dnia 17.12.2023 roku.
                        </li>
                        <li>
                            Nagrody zostaną wydane z uwzględnieniem obowiązujących przepisów podatkowych. Laureat, który otrzyma Nagrodę zobowiązany jest do zapłaty należnego podatku dochodowego od wygranej w Konkursie w wysokości zgodnej z przepisami ustawy z dnia 26 lipca 1991 r. o podatku dochodowym od osób fizycznych (Dz. U. z 2022 r. poz. 2647 z późn. zm.). Fundatorem Nagród oraz płatnikiem podatku jest Organizator. Kwoty pieniężne przyznane w ramach Nagrody zostaną potrącone przy wydaniu Nagrody i przeznaczone na zapłatę podatku dochodowego z tytułu wygranej w Konkursie.
                        </li>
                    </ul>
                    <h2>§5 ZASADY POSTĘPOWANIA REKLAMACYJNEGO</h2>
                    <ul>
                        <li>
                            Reklamacje co do sposobu przeprowadzenia Konkursu mogą być zgłaszane do dnia 26.10.2023 roku. O zachowaniu terminu do wniesienia reklamacji decyduje data stempla pocztowego (w przypadku listu poleconego), lub data na dowodzie nadania przesyłki kurierskiej,
                        </li>
                        <li>
                            Reklamacje rozpatruje Komisja Konkursowa. Rozpatrzeniu podlegają reklamacje zgłoszone w formie pisemnej i przesłane na adres: Growth Design Studio  Sp. z o.o., z siedzibą Warszawie, ul. Marysińska 4c, 04 – 617 Warszawa, lub w formie wiadomości e-mail na adres poczty elektronicznej: z tytułem w treści: „Reklamacje –Wygraj z Almette”. Reklamacja musi zawierać: imię, nazwisko, dokładny adres korespondencyjny Uczestnika Konkursu (w przypadku reklamacji wysłanej pocztą lub przesyłką kurierską) lub adres e-mail do kontaktu (w przypadku zgłoszenia reklamacji w formie elektronicznej), przyczynę reklamacji wraz z określeniem żądania reklamującego Uczestnika.
                        </li>
                        <li>
                            Rozpatrywanie reklamacji trwa do 14 dni liczonych od dnia następnego od jej otrzymania (włączając w to zawiadomienie Uczestnika o wyniku reklamacji). Zgłaszający reklamacje zostanie powiadomiony o decyzji Komisji Konkursowej wydanej po rozpatrzeniu reklamacji listem poleconym wysłanym na adres korespondencyjny wskazany w reklamacji lub w wiadomości e-mail wysłany na adres e-mail do kontaktu wskazany w reklamacji.
                        </li>
                        <li>
                            Postępowanie reklamacyjne jest dobrowolne i nie wyłącza ani nie ogranicza prawa Uczestnika do niezależnego od postępowania reklamacyjnego dochodzenia roszczeń na drodze postępowania sądowego przed właściwym sądem powszechnym.
                        </li>
                    </ul>
                    <h2>
                        §6 PRAWA AUTORSKIE
                    </h2>
                    <ul>
                        <li>
                            Uczestnik oświadcza, iż posiada wszelkie i nieograniczone prawa autorskie do treści wykonanego zadania konkursowego, a także, że wykonał zadanie konkursowe samodzielnie.
                        </li>
                        <li>
                            Naruszenie przez Uczestnika powyższego postanowienia będzie traktowane jako istotne naruszenie Regulaminu i skutkować będzie wykluczeniem Uczestnika z Konkursu.
                        </li>
                        <li>
                            Uczestnik, z chwilą przesłania Zgłoszenia udziału w Konkursie z wykonanym zadaniem konkursowym, udziela Organizatorowi niewyłącznego, nieodpłatnego, nieograniczonego co do czasu i terytorium upoważnienia do korzystania z autorskich praw majątkowych i praw zależnych, z nieodpłatnym prawem do udzielania dalszych licencji oraz nieodpłatnym prawem zezwalania na wykonywanie zależnego prawa autorskiego, do treści rozwiązania zadania konkursowego będącego utworem, w całości lub we fragmentach, z modyfikacjami (opracowania i modyfikowania, w tym m.in. prawo korekty, adaptacji, tłumaczeń, dokonywania przeróbek i zmian całości treści rozwiązania zadania konkursowego oraz jego pojedynczych elementów) lub bez, w celach związanych z realizacją Konkursu i działalnością gospodarczą Organizatora, na następujących polach eksploatacji: (a) utrwalanie treści rozwiązania zadania konkursowego na nośnikach materialnych w szczególności techniką drukarską, reprograficzną, zapisu magnetycznego oraz techniką cyfrową oraz wykonywanie egzemplarzy tych utrwaleń, (b) zwielokrotnianie treści rozwiązania Zadania Konkursowego, (c) wprowadzenie treści rozwiązania Zadania Konkursowego do pamięci komputera, (d) umieszczania treści rozwiązania Zadania Konkursowego w materiałach reklamowych, (e) używanie treści rozwiązania Zadania Konkursowego we wszystkich formach reklamy, w tym także za pośrednictwem wszelkich środków masowego przekazu włączając przekaz satelitarny, (f) rozporządzania prawami w inny sposób, w tym w szczególności do ich użyczania i wynajmowania, (g) zbywanie nabytych praw na rzecz innych osób, (h) publicznego wystawienia, wyświetlenia, odtworzenia oraz nadawania, a także publicznego udostępnienia treści rozwiązania zadania konkursowego w taki sposób, aby każdy mógł mieć do niego dostęp w miejscu i czasie przez siebie wybranym, (j) używanie treści rozwiązania zadania konkursowego w obrocie gospodarczym we wszelkich dopuszczalnych w świetle prawa formach.
                        </li>
                    </ul>
                    <h2>
                        §7 OCHRONA DANYCH OSOBOWYCH
                    </h2>
                    <ul>
                        <li>
                            Dane osobowe przetwarzane są zgodnie z wymogami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (Ogólne Rozporządzenie o Ochronie Danych) (dalej <b>RODO</b>) oraz ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz. U. z 2019 r. poz. 1781).
                        </li>
                        <li>
                            Administratorem danych osobowych Uczestników Konkursu jest Hochland Polska Sp. z o.o. z siedzibą w Kaźmierzu (64-530) przy ul. Okrężnej 2. Administrator powołał Inspektora Ochrony Danych, z którym można skontaktować się za pośrednictwem adresu e-mail: <a href="mailto:daneosobowe@hochland.com">daneosobowe@hochland.com</a>.
                        </li>
                        <li>
                            Dane osobowe Uczestników, przetwarzane są przez Administratora na podstawie udzielonej zgody, w celach związanych z organizacją Konkursu (podstawa prawna: art. 6 ust. 1 lit. a i b RODO), a także w celach związanych z realizacją prawnie usprawiedliwionych interesów Administratora, takich jak rozpatrywanie ewentualnych skarg i reklamacji Uczestników i cele dowodowe na potrzeby obrony w sprawach dotyczących roszczeń związanych z Konkursem (podstawa prawna: art. 6 ust. 1 lit. f RODO).
                        </li>
                        <li>
                            Dostęp do danych osobowych będzie mieć personel Administratora oraz podmioty świadczące usługi na rzecz Administratora (tj. Organizator, podmioty świadczące usługi IT, wsparcia technicznego, prawnicze, księgowe, usługi pocztowe, kurierskie oraz w zakresie przewidzianym obowiązującym prawem właściwe organy administracji publicznej oraz organy wymiaru sprawiedliwości), które muszą mieć dostęp do danych, aby wykonywać swoje obowiązki. Podmioty te będą miały dostęp do danych tylko w zakresie niezbędnym do realizacji swoich zadań. Odbiorcą danych osobowych Uczestników, którzy otrzymają nagrodę, będzie także Organizator, który przetwarzać je będzie w zakresie spełnienia swoich praw i obowiązków, związanych ze statusem Organizatora, jako odrębny administrator danych osobowych, działający na zasadach określonych w Załączniku nr 1 do Regulaminu. Uczestnik może zostać poproszony o podanie dodatkowych danych osobowych w zakresie niezbędnym do realizacji obowiązków Organizatora.
                        </li>
                        <li>
                            Uczestnikom przysługuje prawo do:

                            <ol className="podpunkty">
                                <li>
                                    żądania dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, do wniesienia sprzeciwu wobec przetwarzania, a także prawo do przenoszenia danych,
                                </li>
                                <li>
                                    cofnięcia zgody na przetwarzanie danych osobowych oraz na komunikowanie się w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania/kontaktowania się, którego dokonano na podstawie zgody przed jej cofnięciem,
                                </li>
                                <li>
                                    wniesienia skargi do organu nadzorczego, tj. Prezesa Urzędu Ochrony Danych Osobowych.
                                </li>
                            </ol>
                            Uprawnienia, o których mowa powyżej można wykonywać poprzez kontakt z administratorem – listownie na adres: „Hochland Polska” sp. z o.o. z siedzibą w Kaźmierzu (64-530) przy ul. Okrężnej 2 lub pisząc na adres e-mail: <a href="mailto:daneosobowe@hochland.com">daneosobowe@hochland.com</a>.
                        </li>
                        <li>
                            Podanie danych osobowych jest dobrowolne, jednocześnie niezbędne do wzięcia udziału w Konkursie i dla jego rozstrzygnięcia, a także do rozpatrzenia ewentualnych reklamacji. Wycofanie zgody jest jednoznaczne z wycofaniem swojego udziału z Konkursu.
                        </li>
                        <li>Dane osobowe Uczestników będą przetwarzane przez czas trwania Konkursu oraz dodatkowo przez okres niezbędny do obsługi ewentualnych roszczeń, to jest okres 6 lat. </li>
                        <li>
                            W związku z prowadzeniem Konkursu od Uczestników będą zbierane następujące dane osobowe: imię, nazwisko, e-mail.
                        </li>
                        <li>
                            Dane osobowe Uczestników nie będą przetwarzane w sposób zautomatyzowany i nie będą poddawane profilowaniu.
                        </li>
                        <li>
                            Uczestnik w Konkursie zobowiązany jest podawać wyłącznie dane prawdziwe i aktualne.
                        </li>
                    </ul>
                    <h2>
                        §8 POSTANOWIENIA KOŃCOWE
                    </h2>
                    <ul>
                        <li>
                            Uczestnik dokonując Zgłoszenia udziału w Konkursie wyraża zgodę na zasady Konkursu zawarte w Regulaminie.
                        </li>
                        <li>
                            Postanowienia niniejszego Regulaminu stanowią wyłączną podstawę do prowadzenia Konkursu. Wszelkie materiały promocyjno-reklamowe nie stanowią oferty w rozumieniu Kodeksu cywilnego.
                        </li>
                        <li>
                            Niniejszy Regulamin dostępny jest na stronie internetowej:
                            <a href="http://www.wygrajzalmette.pl"> www.wygrajzalmette.pl</a>
                        </li>
                        <li>
                            Wszelkie spory wynikłe z tytułu wykonania zobowiązań związanych z niniejszym Konkursem będą rozstrzygane przez właściwy sąd powszechny.
                        </li>
                        <li>
                            Zwycięzcy nagrody nie przysługuje prawo do zastrzeżenia szczególnych właściwości nagrody ani do otrzymania jej ekwiwalentu (pieniężnego, rzeczowego).
                        </li>
                        <li>
                            Konkurs, którego warunki zostały określone w niniejszym Regulaminie nie jest loterią promocyjną ani audioteksową w rozumieniu ustawy z dnia 19 listopada 2009 r. o grach hazardowych (Dz.U. 2020 r., poz. 2094, z późn. zm.).
                        </li>
                        <li>
                            Organizator dołoży starań, aby korzystanie ze strony internetowej www.wygrajzalmette.pl było możliwe dla Uczestników z użyciem wszystkich popularnych przeglądarek internetowych, systemów operacyjnych, typów komputerów oraz typów połączeń internetowych. Organizator nie gwarantuje i nie odpowiada za to, że każdy wariant konfiguracyjny sprzętu elektronicznego posiadany przez Uczestnika, umożliwi korzystanie z w/w stron internetowych. Minimalne wymagania techniczne umożliwiające korzystanie ze strony internetowej: <a href="http://www.wygrajzalmette.pl">www.wygrajzalmette.pl</a>, z zastrzeżeniem zdania poprzedniego, to przeglądarka internetowa Firefox w wersji co najmniej 16.0 lub Internet Explorer w wersji co najmniej 8.0 lub Chrome w wersji co najmniej 12.0 lub Opera w wersji co najmniej 11.0, z włączoną obsługą języka Javascript, akceptująca pliki typu „cookies”.
                        </li>
                        <li>
                            Organizator potwierdza, iż niezależnie od podjętych przez niego działań mających na celu zabezpieczenie ze strony internetowej <a href="http://www.wygrajzalmette.pl">www.wygrajzalmette.pl</a>, ze względu na publiczny charakter sieci Internet i korzystanie z usług świadczonych drogą elektroniczną, Uczestnicy powinni liczyć się z zagrożeniem pozyskania i modyfikowana danych Uczestników przez osoby nieuprawnione. Dlatego Uczestnicy powinni, również w celu podwyższenia bezpieczeństwa swojego sprzętu oraz danych, stosować właściwe środki techniczne, które zminimalizują wskazane wyżej zagrożenia poprzez stosowanie programów antywirusowych i chroniących tożsamość korzystających z sieci Internet. Organizator zaleca unikanie korzystania ze strony internetowej www.wygrajzalmette.pl przy użyciu nieznanych komputerów osobistych.
                        </li>
                    </ul>
                </div >
            </div>
        </>
    )
}
export default Regulamin;