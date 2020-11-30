import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './app/navigation';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style='dark' />
    </>
  );
}
