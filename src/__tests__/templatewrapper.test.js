import { render, screen } from '@testing-library/react';
import Template from '../component/Pagination';

test('test', () => {
    render(<Template/>);
    const TemplateElement = screen.getByText('Next');
    expect(TemplateElement).toBeInTheDocument();
    expect(TemplateElement).toContainHTML('button');
})