import React, { useState } from 'react';
import InputField from './InputField';

const Convert: React.FC = () => {
  // Gestion des états
  const [eurValue, setEurValue] = useState<number | ''>('');
  const [usdValue, setUsdValue] = useState<number | ''>('');

  // Gestion du comportement
  const handleEurChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '') {
      setEurValue('');
      setUsdValue('');
    } else {
      const eur = Number(value);
      setEurValue(eur);
      setUsdValue(Number((eur * 1.1).toFixed(2))); // Exemple de taux de conversion EUR -> USD
    }
  };

  const handleUsdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '') {
      setUsdValue('');
      setEurValue('');
    } else {
      const usd = Number(value);
      setUsdValue(usd);
      setEurValue(Number((usd / 1.1).toFixed(2))); // Exemple de taux de conversion USD -> EUR
    }
  };

  // Rendu
  return (
    <div>
      <h1>Convertisseur EUR &lt;-&gt; USD</h1>
      <InputField
        label="EUR"
        value={eurValue}
        onChangeFunction={handleEurChange}
        placeholder="Entrez la valeur en EUR"
      />
      <InputField
        label="USD"
        value={usdValue}
        onChangeFunction={handleUsdChange}
        placeholder="Entrez la valeur en USD"
      />
    </div>
  );
};

export default Convert;