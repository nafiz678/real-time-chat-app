"use client";

import LoadingLogo from "@/components/shared/LoadingLogo";
import SignInPage from "@/components/signIn";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";

type Props = {
    children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";
console.log(CONVEX_URL);

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
    
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {/* Show loading logo while authentication is in progress */}
                <AuthLoading>
                    <LoadingLogo />
                </AuthLoading>

                {/* If authenticated, render children; otherwise, show SignInPage */}
                <Authenticated>
                    {children}
                </Authenticated>

                {/* Show Sign In page when not authenticated */}
                <Unauthenticated><SignInPage /></Unauthenticated>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};

export default ConvexClientProvider;
