export interface ContactMessage {
  id: string;
  senderName: string;
  email: string;
  subject: string;
  subjectDetail: string;
  status: 'New' | 'Read' | 'Replied';
  statusColor: string;
  date: string;
  time: string;
  avatarColor: string;
}
