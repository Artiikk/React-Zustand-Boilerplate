import cls from './styles.module.scss';

export const LayoutError = () => {
  return (
    <div>
      <h1 className={cls.error}>Layout Error</h1>
      <p>Please try to reload the page or just return back</p>
    </div>
  );
};
