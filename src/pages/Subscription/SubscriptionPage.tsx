import React, { useEffect } from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { SubscribeBanner } from '../../components/Subscription/SubscribeBanner';
import { HowItWorks } from '../../components/Subscription/HowItWorks';
import { AboutAboutPlan } from '../../components/Subscription/AboutPlan';
// AboutAboutPlan named export matches file export name, though filename is AboutPlan.tsx
import { SubscriptionForm } from '../../components/Subscription/SubscriptionForm';
import { SubscriptionFAQ } from '../../components/Subscription/SubscriptionFAQ';

export const SubscriptionPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Header />

            <main>
                <SubscribeBanner />
                 {/* <HowItWorks /> */}
                <AboutAboutPlan />
                <SubscriptionForm />
                <SubscriptionFAQ />
            </main>

            <Footer />
        </div>
    );
};
