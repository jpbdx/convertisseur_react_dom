import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // test et expect sont maintenant disponibles
import Converter from '../components/Converter';

test('Rendu du composant Converter', () => {
	render(<Converter />);
	// /texte/i est une expression régulière qui signifie recherche du texte insensible à la casse
	const headingElement = screen.getByText(/Convertisseur EUR <-> USD/i);
	expect(headingElement).toBeInTheDocument();
});

test('Convertit EUR vers USD correctement', () => {
	render(<Converter />);
	const eurInput = screen.getByLabelText(/eur/i); 
	fireEvent.change(eurInput, { target: { value: '10' } });
	const usdInput = screen.getByLabelText(/usd/i);
	expect(usdInput).toHaveValue(11);
});

test('Convertit USD vers EUR correctement', () => {
	render(<Converter />);
	const usdInput = screen.getByLabelText(/usd/i);
	fireEvent.change(usdInput, { target: { value: '11' } });
	const eurInput = screen.getByLabelText(/eur/i);
	expect(eurInput).toHaveValue(10);
});