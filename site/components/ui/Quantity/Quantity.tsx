import React, { FC } from 'react';
import { Cross, Plus, Minus } from '@components/icons';
import cn from 'clsx';
import s from './Quantity.module.scss';

export interface QuantityProps {
  value: number
  increase: () => any
  decrease: () => any
  handleRemove: React.MouseEventHandler<HTMLButtonElement>
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  max?: number
}

const Quantity: FC<QuantityProps> = ({
  value,
  increase,
  decrease,
  handleChange,
  handleRemove,
  max = 6,
}) => (
  <div className='flex flex-row h-9'>
    <button className={s.actions} type='button' onClick={handleRemove}>
      <Cross width={20} height={20} />
    </button>
    <label htmlFor='quantity' className='w-full border-accent-2 border ml-2'>
      <input
        className={s.input}
        onChange={(e) => (Number(e.target.value) < max + 1 ? handleChange(e) : undefined)}
        value={value}
        type='number'
        max={max}
        min='0'
        readOnly
      />
    </label>
    <button
      type='button'
      onClick={decrease}
      className={s.actions}
      style={{ marginLeft: '-1px' }}
      disabled={value <= 1}
    >
      <Minus width={18} height={18} />
    </button>
    <button
      type='button'
      onClick={increase}
      className={cn(s.actions)}
      style={{ marginLeft: '-1px' }}
      disabled={value < 1 || value >= max}
    >
      <Plus width={18} height={18} />
    </button>
  </div>
);

export default Quantity;
