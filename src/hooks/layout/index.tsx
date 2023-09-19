import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

export async function layoutView(fontLoaded: boolean): Promise<void> {
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);
  return await onLayoutRootView();
}
