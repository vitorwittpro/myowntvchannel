export default async function Page({
    params,
}: {
    params: Promise<{ channel: string }>;
}) {
    const { channel } = await params;

    return (
    <div>
      <h1>You are watching {channel}</h1>
    </div>
  )
}