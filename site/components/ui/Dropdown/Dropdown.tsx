import cn from 'clsx';
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import s from './Dropdown.module.scss';

export const Dropdown = DropdownMenu.Root;
export const DropdownMenuItem = DropdownMenu.Item;
export const DropdownTrigger = DropdownMenu.Trigger;
export const DropdownMenuLabel = DropdownMenu.Label;
export const DropdownMenuGroup = DropdownMenu.Group;

export const DropdownContent = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode } & DropdownMenu.DropdownMenuContentProps &
    React.RefAttributes<HTMLDivElement>
>(({ children, className, ...props }, forwardedRef) => (
  <DropdownMenu.Content ref={forwardedRef} sideOffset={8} {...props}>
    <div className={cn(s.root, className)}>{children}</div>
  </DropdownMenu.Content>
));
