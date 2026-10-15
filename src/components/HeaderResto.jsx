import React from 'react';

export function HeaderResto({ nombreLocal, eslogan, estaAbierto }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '2rem', padding: '1rem', borderBottom: '2px solid #ccc' }}>
      <h1>{nombreLocal}</h1>
      <p style={{ fontStyle: 'italic', color: '#666' }}>{eslogan}</p>
      
      <div>
        {estaAbierto ? (
          <span style={{ backgroundColor: '#d4edda', color: '#155724', padding: '0.4rem 0.8rem', borderRadius: '4px', fontWeight: 'bold' }}>
            Abierto Ahora
          </span>
        ) : (
          <span style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '0.4rem 0.8rem', borderRadius: '4px', fontWeight: 'bold' }}>
            Cerrado por el momento
          </span>
        )}
      </div>
    </header>
  );
}