import React from 'react';

// Interface requise pour typescript (indiquant le type du composant InputField et ses propriétés)
interface InputFieldProps {
  label: string;
  value: number | '';
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

// value déscendra de Convert.tsx
// onChange remontera à Convert.tsx
const InputField: React.FC<InputFieldProps> = ({ label, value, onChangeFunction, placeholder }) => {
  return (
    <div>
      <label>
        {label}:
        <input
          type="number"
          value={value}
          onChange={onChangeFunction}
          placeholder={placeholder} // texte gris dans le champ de saisie
        />
      </label>
    </div>
  );
};

export default InputField;
export type {InputFieldProps}; // Export du type pour les fichiers typescript

