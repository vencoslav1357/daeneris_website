'use client';
import { useEffect } from 'react';

export default function VerificationPage() {
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const verificationCode = urlParams.get('verification_code');
        
        if (verificationCode) {
            // Uložení údajů do localStorage (pokud je to stále potřeba)
            window.localStorage.setItem('verification_code', verificationCode);
            
            // Přesměrování do aplikace pomocí deep linku
            const appUrlScheme = "daeneris://";
            const verificationLink = `${appUrlScheme}verify?code=${verificationCode}`;
            window.location.href = verificationLink;
        } else {
            console.error('Verification code or email not found in URL parameters.');
        }
    }, []);
    
    return (
        <div>
            <p>Přesměrovávání do aplikace...</p>
        </div>
    );
}