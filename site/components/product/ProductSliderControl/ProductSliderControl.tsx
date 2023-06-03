import { FC, MouseEventHandler, memo } from 'react';
import cn from 'clsx';
import { ArrowLeft, ArrowRight } from '@components/icons';
import s from './ProductSliderControl.module.scss';

interface IProductSliderControl {
  onPrev: MouseEventHandler<HTMLButtonElement>
  onNext: MouseEventHandler<HTMLButtonElement>
}

const ProductSliderControl: FC<IProductSliderControl> = ({
  onPrev,
  onNext,
}) => (
  <div className={s.control}>
    <button
      type='button'
      className={cn(s.leftControl)}
      onClick={onPrev}
      aria-label='Previous Product Image'
    >
      <ArrowLeft />
    </button>
    <button
      type='button'
      className={cn(s.rightControl)}
      onClick={onNext}
      aria-label='Next Product Image'
    >
      <ArrowRight />
    </button>
  </div>
);

export default memo(ProductSliderControl);
