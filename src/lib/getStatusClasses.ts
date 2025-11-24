export function getStatusClasses(status: string, t?: { status?: { new?: string; modified?: string; ignored?: string; published?: string } }) {
  const sNew = t?.status?.new ?? 'Nova';
  const sModified = t?.status?.modified ?? 'Alterada';
  const sIgnored = t?.status?.ignored ?? 'Ignorada';
  const sPublished = t?.status?.published ?? 'Publicada';

  switch (status) {
    case sNew:
      return 'bg-blue-600 text-blue-100';
    case sModified:
      return 'bg-yellow-600 text-yellow-100';
    case sIgnored:
      return 'bg-gray-600 text-gray-100';
    case sPublished:
      return 'bg-green-600 text-green-100';
    default:
      return 'bg-gray-500 text-white';
  }
}
