import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FileText,
  Plus,
  Eye,
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
  DollarSign,
  Calendar,
  User,
  Building,
} from "lucide-react";

interface ContractManagementProps {
  userRole?: "agent" | "manager";
}

const ContractManagement = ({
  userRole = "agent",
}: ContractManagementProps) => {
  const [selectedContract, setSelectedContract] = useState<any>(null);
  const [newDealStep, setNewDealStep] = useState(1);
  const [dealFormData, setDealFormData] = useState({
    artistName: "",
    dealType: "",
    amount: "",
    duration: "",
    description: "",
  });

  const contracts = [
    {
      id: 1,
      title: "Recording Contract - Alex Rivera",
      artist: "Alex Rivera",
      type: "Recording Deal",
      amount: "$50,000",
      status: "signed",
      progress: 100,
      dateCreated: "2024-01-15",
      deadline: "2024-02-15",
      signatureStatus: "completed",
    },
    {
      id: 2,
      title: "Tour Agreement - Maya Chen",
      artist: "Maya Chen",
      type: "Tour Contract",
      amount: "$75,000",
      status: "pending_signature",
      progress: 80,
      dateCreated: "2024-01-20",
      deadline: "2024-02-20",
      signatureStatus: "pending",
    },
    {
      id: 3,
      title: "Publishing Deal - Jordan Smith",
      artist: "Jordan Smith",
      type: "Publishing",
      amount: "$30,000",
      status: "in_review",
      progress: 60,
      dateCreated: "2024-01-25",
      deadline: "2024-02-25",
      signatureStatus: "draft",
    },
    {
      id: 4,
      title: "Endorsement Deal - Sofia Martinez",
      artist: "Sofia Martinez",
      type: "Endorsement",
      amount: "$25,000",
      status: "negotiation",
      progress: 40,
      dateCreated: "2024-02-01",
      deadline: "2024-03-01",
      signatureStatus: "draft",
    },
  ];

  const contractHistory = [
    {
      id: 1,
      action: "Contract created",
      user: "John Agent",
      date: "2024-01-15 10:30 AM",
      details: "Initial contract draft created",
    },
    {
      id: 2,
      action: "Sent for review",
      user: "John Agent",
      date: "2024-01-16 2:15 PM",
      details: "Contract sent to legal team for review",
    },
    {
      id: 3,
      action: "Legal review completed",
      user: "Legal Team",
      date: "2024-01-18 11:45 AM",
      details: "Contract approved with minor revisions",
    },
    {
      id: 4,
      action: "Sent to artist",
      user: "John Agent",
      date: "2024-01-20 9:00 AM",
      details: "Contract sent to Alex Rivera for signature",
    },
    {
      id: 5,
      action: "Signed by artist",
      user: "Alex Rivera",
      date: "2024-01-22 3:30 PM",
      details: "Contract digitally signed",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "signed":
        return "bg-green-100 text-green-800";
      case "pending_signature":
        return "bg-yellow-100 text-yellow-800";
      case "in_review":
        return "bg-blue-100 text-blue-800";
      case "negotiation":
        return "bg-orange-100 text-orange-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "signed":
        return <CheckCircle className="h-4 w-4" />;
      case "pending_signature":
        return <Clock className="h-4 w-4" />;
      case "in_review":
        return <Eye className="h-4 w-4" />;
      case "negotiation":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const handleCreateDeal = () => {
    console.log("Creating new deal:", dealFormData);
    setNewDealStep(1);
    setDealFormData({
      artistName: "",
      dealType: "",
      amount: "",
      duration: "",
      description: "",
    });
  };

  const nextStep = () => {
    if (newDealStep < 3) setNewDealStep(newDealStep + 1);
  };

  const prevStep = () => {
    if (newDealStep > 1) setNewDealStep(newDealStep - 1);
  };

  return (
    <div className="bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Contract Management
          </h1>
          <p className="text-muted-foreground mt-1">
            {userRole === "manager"
              ? "Manage contracts for your artists"
              : "Track and create deals"}
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create New Deal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                Create New Deal - Step {newDealStep} of 3
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <Progress value={(newDealStep / 3) * 100} className="w-full" />

              {newDealStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Artist Name
                      </label>
                      <Input
                        placeholder="Enter artist name"
                        value={dealFormData.artistName}
                        onChange={(e) =>
                          setDealFormData({
                            ...dealFormData,
                            artistName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Deal Type
                      </label>
                      <Select
                        value={dealFormData.dealType}
                        onValueChange={(value) =>
                          setDealFormData({ ...dealFormData, dealType: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select deal type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="recording">
                            Recording Deal
                          </SelectItem>
                          <SelectItem value="tour">Tour Contract</SelectItem>
                          <SelectItem value="publishing">
                            Publishing Deal
                          </SelectItem>
                          <SelectItem value="endorsement">
                            Endorsement
                          </SelectItem>
                          <SelectItem value="management">
                            Management Contract
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {newDealStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Deal Terms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Deal Amount
                      </label>
                      <Input
                        placeholder="$0.00"
                        value={dealFormData.amount}
                        onChange={(e) =>
                          setDealFormData({
                            ...dealFormData,
                            amount: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Duration (months)
                      </label>
                      <Input
                        placeholder="12"
                        type="number"
                        value={dealFormData.duration}
                        onChange={(e) =>
                          setDealFormData({
                            ...dealFormData,
                            duration: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Description
                    </label>
                    <Textarea
                      placeholder="Describe the deal terms and conditions..."
                      value={dealFormData.description}
                      onChange={(e) =>
                        setDealFormData({
                          ...dealFormData,
                          description: e.target.value,
                        })
                      }
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {newDealStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Review & Confirm</h3>
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Artist:</span>
                      <span>{dealFormData.artistName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Deal Type:</span>
                      <span className="capitalize">
                        {dealFormData.dealType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Amount:</span>
                      <span>{dealFormData.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span>{dealFormData.duration} months</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Description:</span>
                    <p className="text-muted-foreground mt-1">
                      {dealFormData.description}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={newDealStep === 1}
                >
                  Previous
                </Button>
                {newDealStep < 3 ? (
                  <Button onClick={nextStep}>Next</Button>
                ) : (
                  <Button onClick={handleCreateDeal}>Create Deal</Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Contracts Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Deal Proposals Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contract</TableHead>
                <TableHead>Artist</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{contract.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Created: {contract.dateCreated}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {contract.artist}
                    </div>
                  </TableCell>
                  <TableCell>{contract.type}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {contract.amount}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getStatusColor(contract.status)}
                    >
                      {getStatusIcon(contract.status)}
                      <span className="ml-1 capitalize">
                        {contract.status.replace("_", " ")}
                      </span>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <Progress value={contract.progress} className="w-20" />
                      <span className="text-xs text-muted-foreground">
                        {contract.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedContract(contract)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Contract Viewer */}
      {selectedContract && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Contract Viewer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-6 rounded-lg min-h-96 flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {selectedContract.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    PDF Contract Document
                  </p>
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {/* Signature Status */}
            <Card>
              <CardHeader>
                <CardTitle>Signature Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Contract Progress</span>
                    <span className="font-semibold">
                      {selectedContract.progress}%
                    </span>
                  </div>
                  <Progress value={selectedContract.progress} />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Contract created</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Legal review completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedContract.signatureStatus === "completed" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-yellow-500" />
                      )}
                      <span className="text-sm">Artist signature</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contract History */}
            <Card>
              <CardHeader>
                <CardTitle>Contract History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contractHistory.slice(0, 3).map((entry) => (
                    <div
                      key={entry.id}
                      className="border-l-2 border-muted pl-4"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">
                          {entry.action}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {entry.user}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {entry.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {entry.details}
                      </p>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    View Full History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractManagement;
