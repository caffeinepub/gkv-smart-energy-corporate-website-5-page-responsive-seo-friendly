import Array "mo:core/Array";
import List "mo:core/List";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  type ContactEntry = {
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactEntry {
    public func compare(entry1 : ContactEntry, entry2 : ContactEntry) : Order.Order {
      Text.compare(entry1.email, entry2.email);
    };
  };

  let contactFormEntries = List.empty<ContactEntry>();

  public shared ({ caller }) func submitContactFormEntry(name : Text, email : Text, message : Text) : async () {
    let entry : ContactEntry = {
      name = name.trim(#char ' ');
      email = email.trim(#char ' ');
      message = message.trim(#char ' ');
    };

    validateEntry(entry);

    contactFormEntries.add(entry);
  };

  public query ({ caller }) func getAllContactFormEntries() : async [ContactEntry] {
    contactFormEntries.toArray();
  };

  func validateEntry(entry : ContactEntry) {
    if (entry.name.size() == 0) {
      Runtime.trap("Name cannot be empty");
    };
    if (entry.email.size() == 0) {
      Runtime.trap("Email cannot be empty");
    };
    if (entry.message.size() == 0) {
      Runtime.trap("Message cannot be empty");
    };
    if (not entry.email.contains(#text "@")) {
      Runtime.trap("Invalid email format");
    };
  };
};
