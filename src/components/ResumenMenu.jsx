import React from 'react';

export function ResumenMenu({ platos }) {
  // a. Cantidad total de platos
  const totalPlatos = platos.length;

  // b. Cantidad de platos disponibles
  const platosDisponiblesArr = platos.filter(plato => plato.disponible === true);
  const cantidadDisponibles = platosDisponiblesArr.length;

  // c. Precio promedio de los platos disponibles
  const sumaPrecios = platosDisponiblesArr.reduce((acumulador, plato) => acumulador + plato.precio, 0);
  const precioPromedio = cantidadDisponibles > 0 ? sumaPrecios / cantidadDisponibles : 0;

  return (
    <div style={{
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: '#f1f3f5',
      borderRadius: '8px',
      border: '1px solid #ced4da'
    }}>
      <h3 style={{ margin: '0 0 1rem 0', color: '#343a40' }}>📊 Resumen del Menú</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
        <li><strong>Total de platos en la carta:</strong> {totalPlatos}</li>
        <li><strong>Platos disponibles para ordenar:</strong> {cantidadDisponibles}</li>
        <li><strong>Precio promedio (disponibles):</strong> ${precioPromedio.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</li>
      </ul>
    </div>
  );
}