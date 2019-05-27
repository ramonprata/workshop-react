import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import './demo.css';
import Input from './input';
import BotaoSalvar from './botaoSalvar';
import DemoService from './service';

const FormWithHooks = () => {
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    if (nome.length === 0) {
      const { nome, sobreNome } = await DemoService.getUsuario();
      setNome(nome);
      setSobreNome(sobreNome);
    }
    document.title = `${nome}`;
  }, [nome]);

  async function onSave() {
    setLoading(true);
    await DemoService.salvar({
      nome,
      sobreNome
    });
    resetState();
  }

  function resetState() {
    setLoading(false);
    setNome('');
    setSobreNome('');
  }

  return (
    <Card className="card">
      <CardHeader title="Form with hooks" />
      <CardContent>
        <Input label="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <Input label="Sobrenome" value={sobreNome} onChange={e => setSobreNome(e.target.value)} />
        <BotaoSalvar onSave={onSave} loading={loading} />
      </CardContent>
    </Card>
  );
};

export default FormWithHooks;
