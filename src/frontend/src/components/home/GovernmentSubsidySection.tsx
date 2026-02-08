import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BadgeIndianRupee, Award, Zap } from 'lucide-react';

const subsidyCards = [
  { kw: '1kW', amount: '₹45,000', icon: Zap, color: 'text-green-600' },
  { kw: '2kW', amount: '₹90,000', icon: Award, color: 'text-blue-600' },
  { kw: '3kW', amount: '₹1,08,000', icon: BadgeIndianRupee, color: 'text-orange-600' },
];

const subsidyTable = [
  { capacity: '1 kW', central: '₹30,000', state: '₹15,000', total: '₹45,000' },
  { capacity: '2 kW', central: '₹60,000', state: '₹30,000', total: '₹90,000' },
  { capacity: '3 kW', central: '₹78,000', state: '₹30,000', total: '₹1,08,000' },
];

export default function GovernmentSubsidySection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Government Subsidy Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-semibold">
            PM Surya Ghar Muft Bijli Yojana ke tahat subsidy uplabdh
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Get maximum financial support from Central and State Government for your solar installation
          </p>
        </div>

        {/* Total Subsidy Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {subsidyCards.map((card, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors bg-white">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ${card.color}`}>
                  <card.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{card.kw} System</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{card.amount}</div>
                <p className="text-sm text-muted-foreground">Total Subsidy</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subsidy Breakdown Table */}
        <Card className="border-2 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-center">Central + State Subsidy Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">System Capacity</TableHead>
                    <TableHead className="font-semibold">Central Subsidy</TableHead>
                    <TableHead className="font-semibold">State Subsidy</TableHead>
                    <TableHead className="font-semibold text-right">Total Subsidy</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subsidyTable.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.capacity}</TableCell>
                      <TableCell>{row.central}</TableCell>
                      <TableCell>{row.state}</TableCell>
                      <TableCell className="text-right font-bold text-primary">{row.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Award className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Government Approved Vendor</span>
          </div>
        </div>
      </div>
    </section>
  );
}
