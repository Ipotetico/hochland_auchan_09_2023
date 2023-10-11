import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

import './CookieConsent.scss'

const CookieConsent = () => {
    const [cookies, setCookie] = useCookies(["cookieConsent"]);

    const [showCookie, setShowCookie] = useState(true)


    const giveCookieConsent = () => {
        setCookie("cookieConsent", true, { path: "/" });

        setShowCookie(false)
    };

    return (
        <div className={showCookie ? "cookie_container" : "cookie_container hide"}>
            {/* <img src={process.env.PUBLIC_URL + `/images/cookies.webp`} className='cookies' alt="" /> */}
            <h3>Niniejsza strona korzysta z plików cookies</h3>
            <p>
                „Hochland Polska” Sp. z o.o. z siedzibą w Kaźmierzu (ul. Okrężna 2, 64-530 Kaźmierz) przy pomocy niniejszego serwisu przetwarza Twoje dane osobowe, co odbywa się m.in. przy użyciu plików cookies.
                Niektóre z plików cookies są niezbędne do prawidłowego funkcjonowania serwisu i w związku z tym nie możesz z nich zrezygnować. Jeśli się zgodzisz, zastosujemy pliki cookies również w celu poprawy komfortu korzystania z serwisu, prowadzenia statystyk i w celu śledzenia Twojej aktywności dla potrzeb marketingowych. Twoja zgoda jest dobrowolna i możesz ją w dowolnym momencie wycofać, zmieniając ustawienia przeglądarki. Wycofanie zgody pozostanie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem.
                Aby uzyskać więcej informacji o przetwarzaniu danych osobowych i plikach cookie, zapoznaj się z naszą <span>Polityką prywatności</span>
            </p>
            <button onClick={giveCookieConsent}>
                Zaakceptuj
            </button>
        </div>
    );
};

export default CookieConsent;