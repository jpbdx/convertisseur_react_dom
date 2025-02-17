import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // test et expect sont maintenant disponibles
import InputField from '../components/InputField';

test('Rendu du composant InputField', () => {
    render(<InputField label="Test Label" value={0} onChangeFunction={() => { }} placeholder="0" />);
    const labelElement = screen.getByText(/test label/i);
    expect(labelElement).toBeInTheDocument();
});

test('Appel de onChangeFunction quand la valeur de input change', () => {
    const handleChange = jest.fn(); // fonction appelée lors de l'événement onChange
    render(<InputField label="Test Label" value={0} onChangeFunction={handleChange} placeholder="0" />);
    const inputElement = screen.getByPlaceholderText('0');
    fireEvent.change(inputElement, { target: { value: '10' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
});
