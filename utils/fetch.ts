// app/components/Header.tsx
export async function fetchData(url: string) {
  const res = await fetch(url,{
    cache:'force-cache',
 
  });
  const data = await res.json();
  return data.data;
}