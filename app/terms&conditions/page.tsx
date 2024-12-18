export default function TermsAndConditionsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className="w-[90%] max-w-4xl space-y-8 bg-[#151515] p-12 rounded-2xl shadow-[black] shadow-lg mt-[5%]">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-white mb-6 text-center">Terms & Conditions</h1>
                    
                    <div className="text-gray-400 space-y-6 max-h-[70vh] overflow-y-auto pr-4">
                        <p className="text-sm italic">Last updated: 12/01/2024</p>
                        
                        <div className="space-y-4">
                            <p>
                                These Terms and Conditions (&quot;Terms&quot;, &quot;Agreement&quot;) are a legally binding agreement between you 
                                (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and DaenerisAI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), governing your access to and use of 
                                our mobile application (&quot;App&quot;) and services provided therein.
                            </p>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">1. Eligibility</h2>
                                <div className="pl-4">
                                    <p>1.1. You must be at least 16 years old to use this App.</p>
                                    <p>1.2. By using the App, you represent and warrant that you have the legal capacity to enter into 
                                    this Agreement.</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">2. Account Registration</h2>
                                <div className="pl-4">
                                    <p>2.1. To access certain features, you may be required to register and create an account.</p>
                                    <p>2.2. You are responsible for maintaining the confidentiality of your login credentials.</p>
                                    <p>2.3. Providing false, incomplete, or misleading information may result in account termination.</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">3. Services Provided</h2>
                                <div className="pl-4">
                                    <p>3.1. The App provides an AI assistant that can answer questions, generate responses, control 
                                    Spotify, and perform additional tasks.</p>
                                    <p>3.2. Premium features include generating images, Gmail notifications, floating bubbles, and 
                                    offline functionalities.</p>
                                    <p>3.3. The AI assistant&apos;s responses are generated automatically and may not always be accurate. 
                                    We are not liable for any consequences arising from the use of these responses.</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">4. User Content</h2>
                                <div className="pl-4">
                                    <p>4.1. You are solely responsible for any data or content you input into the App, including optional 
                                    personal details and preferences.</p>
                                    <p>4.2. You must not submit any content that is illegal, offensive, or violates the rights of third 
                                    parties.</p>
                                    <p>4.3. We do not monitor or verify the accuracy of user-submitted content. Any consequences 
                                    arising from the use of such content are the sole responsibility of the user.</p>
                                    <p>4.4. We reserve the right to remove content that violates these Terms or applicable laws and to 
                                    suspend or terminate the accounts of users responsible for such content.</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">5. Subscription and Payments</h2>
                                <div className="pl-4">
                                    <p>5.1. Premium features are available through a subscription plan at $4 per month.</p>
                                    <p>5.2. Subscription fees are non-refundable.</p>
                                    <p>5.3. You may cancel your subscription at any time, but access to Premium features will 
                                    terminate immediately.</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">6. Advertisements</h2>
                                <div className="pl-4">
                                    <p>6.1. Free users agree to see advertisements, including banners and full-page ads.</p>
                                    <p>6.2. Premium users will not see any advertisements.</p>
                                    <p>6.3. We reserve the right to modify ad frequency at any time.</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">7. Data Collection and Privacy</h2>
                                <div className="pl-4">
                                    <p>7.1. By using the App, you consent to the collection and processing of your data as outlined in 
                                    our Privacy Policy.</p>
                                    <p>7.2. Users in the European Union (EU) have specific rights under the General Data Protection 
                                    Regulation (GDPR), including:</p>
                                    <ul className="list-disc pl-6">
                                        <li>The right to access, update, or delete your personal data.</li>
                                        <li>The right to restrict or object to data processing.</li>
                                        <li>The right to data portability.</li>
                                        <li>The right to file a complaint with a data protection authority.</li>
                                    </ul>
                                    <p>7.3. Users in California are entitled to additional rights under the California Consumer Privacy 
                                    Act (CCPA), including:</p>
                                    <ul className="list-disc pl-6">
                                        <li>The right to know what personal information is being collected.</li>
                                        <li>The right to request deletion of personal information.</li>
                                        <li>The right to opt out of the sale of personal information (if applicable).</li>
                                    </ul>
                                    <p>[Link to Privacy Policy]</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">8. Intellectual Property</h2>
                                <div className="pl-4">
                                    <p>8.1. All content and code in the App are our property or licensed to us.</p>
                                    <p>8.2. You may not copy, distribute, or modify any part of the App without written permission.</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">9. Limitation of Liability</h2>
                                <div className="pl-4">
                                    <p>9.1. The App is provided &quot;as is&quot;. We make no warranties about its accuracy, reliability, or 
                                    suitability.</p>
                                    <p>9.2. We are not responsible for any damages resulting from your use of the App, including:</p>
                                    <ul className="list-disc pl-6">
                                        <li>Errors or inaccuracies in AI-generated responses.</li>
                                        <li>Decisions or actions you take based on the information provided by the AI assistant.</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">10. Termination</h2>
                                <div className="pl-4">
                                    <p>10.1. We reserve the right to suspend or terminate your account for any violation of these Terms.</p>
                                    <p>10.2. Upon termination, your access to the App will cease immediately.</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">11. Governing Law</h2>
                                <div className="pl-4">
                                    <p>11.1. These Terms are governed by and construed in accordance with the laws of Czech 
                                    Republic.</p>
                                    <p>11.2. Any disputes must be resolved in the courts of Czech Republic.</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">12. Changes to Terms</h2>
                                <div className="pl-4">
                                    <p>12.1. We may update these Terms at any time.</p>
                                    <p>12.2. Changes will be effective immediately upon posting in the App. Your continued use of the 
                                    App constitutes acceptance of the revised Terms.</p>
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">13. Contact Information</h2>
                                <div className="pl-4">
                                    <p>If you have any questions about these Terms, contact us at:</p>
                                    <p>Email: <a href="mailto:daenerisai@gmail.com" className="text-blue-400">daenerisai@gmail.com</a></p>
                                    <p>Company: DaenerisAI</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}