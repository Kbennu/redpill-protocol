import { useRouter } from 'next/router';

export default function FragmentPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Фрагмент: {id}</h1>
    </div>
  );
}
