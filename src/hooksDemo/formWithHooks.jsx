import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import './demo.css';
import Input from './input';
import WidthWindow from './widthWindow';
import { useDocumentTitle } from './customHooks/useDocumentTitle';
import { useWidthResize } from './customHooks/useWidthResize';
import { useInputForm } from './customHooks/useInputForm';

const FormWithHooks = props => {
  const nomeInput = useInputForm('Ramon');
  const sobreNomeInput = useInputForm('');
  const width = useWidthResize();
  useDocumentTitle(nomeInput.value);
  return (
    <Card className="card">
      <CardHeader title="Form com hooks" />
      <CardContent>
        <Input label="Nome" {...nomeInput} />
        <Input label="Sobrenome" {...sobreNomeInput} />
        <WidthWindow width={width} />
      </CardContent>
    </Card>
  );
};

export default FormWithHooks;
