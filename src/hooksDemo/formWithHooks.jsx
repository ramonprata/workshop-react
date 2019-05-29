import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import './demo.css';
import Input from './input';
import BotaoSalvar from './botaoSalvar';
import DemoService from './service';
import WidthWindow from './widthWindow';
import { useDocumentTitle } from './customHooks/useDocumentTitle';
import { useWidthResize } from './customHooks/useWidthResize';
import { useInputForm } from './customHooks/useInputForm';

const FormWithHooks = () => {
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = nome;
  }, [nome]);

  useEffect(() => {
    const handleWidthResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidthResize);
    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  });

  function handleNomeChange(e) {
    setNome(e.target.value);
  }

  function handleSobreNomeChange(e) {
    setSobreNome(e.target.value);
  }

  return (
    <Card className="card">
      <CardHeader title="Form com hooks" />
      <CardContent>
        <Input label="Nome" value={nome} onChange={handleNomeChange} />
        <Input label="Sobrenome" value={sobreNome} onChange={handleSobreNomeChange} />
        <WidthWindow width={width} />
      </CardContent>
    </Card>
  );
};

export default FormWithHooks;
