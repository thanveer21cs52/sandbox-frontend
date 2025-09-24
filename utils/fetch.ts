// app/components/Header.tsx
export async function fetchData(url: string) {
  const res = await fetch(url,{
    next:{revalidate: 60}
  });
  const data = await res.json();
  return data.data;
}