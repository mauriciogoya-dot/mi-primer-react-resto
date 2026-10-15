import React from 'react';

export function PlatoCard({ nombre, precio, descripcion, disponible }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1rem',
      backgroundColor: disponible ? '#fff' : '#f9f9f9',
      opacity: disponible ? 1 : 0.6,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{nombre}</h3>
      <p style={{ color: '#555', fontSize: '0.95rem' }}>{descripcion}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
        {disponible ? (
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2b8a3e' }}>
            ${precio.toLocaleString('es-AR')}
          </span>
        ) : (
          <span style={{ color: '#c92a2a', fontWeight: 'bold', backgroundColor: '#fff5f5', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>
            Agotado
          </span>
        )}
      </div>
    </div>
  );
}